const Game = require("../db/models/game");
const Player = require("../db/models/player");
const ImageCard = require("../db/models/imageCard")
const SentenceCard = require("../db/models/sentenceCard");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

module.exports = io => {

  //use this function to populate a Game
  function sendPopulateGame(gameId) {
    Game.findOne({
      _id: gameId
    }).populate("players").populate({
      path: "players",
      populate: {
        path: "sentenceCards",
        model: "SentenceCard"
      }
    }).populate("currentImage").populate("sentenceCards").populate({
      path: "selectedCards",
      populate: {
        path: "sentenceCard",
        model: "SentenceCard"
      },
    }).populate({
      path: "selectedCards",
      populate: {
        path: "player",
        model: "Player"
      }
    }).then(populatedGame => {
      console.log("sending back game")
      io.to(populatedGame.entranceCode).emit("updated_game", populatedGame);
    })
  }

  io.on("connection", socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`);

    socket.on("new_game", async data => {
      const player = await Player.findOne({
        _id: data.playerId
      })
      player.sentenceCards = [];
      await player.save();
      const code = Math.random().toString(36).substring(2, 6).toUpperCase();
      const newGame = new Game({
        players: [player],
        imageCards: [],
        sentenceCards: [],
        entranceCode: code
      })

      await newGame.save();
      socket.join(newGame.entranceCode)
      sendPopulateGame(newGame._id);
    })

    socket.on("join_game", async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      })
      if (!game) {
        socket.emit("bad-game-code", {})
        return
      }
      if (!game.players.includes(data.playerId)) {
        game.players.push(data.playerId);
        await game.save();
      }

      socket.join(game.entranceCode)
      sendPopulateGame(game._id);
    })

    socket.on("start_game", async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      })

      game.status = "ALL_SELECTING";

      const arrOfPlayers = game.players
      const hostId = arrOfPlayers[Math.floor(Math.random() * arrOfPlayers.length)];
      game.host = hostId

      const imageCards = await ImageCard.find();
      const sentenceCards = await SentenceCard.find();

      game.imageCards = shuffleArray(imageCards);
      game.currentImage = game.imageCards.pop();

      const newDeck = shuffleArray(sentenceCards);
      await game.players.forEach(async playerId => {
        const player = await Player.findOne({
          _id: playerId
        });
        const cards = newDeck.splice(0, 7);
        player.sentenceCards = cards;
        await player.save();
      });

      game.sentenceCards = newDeck;

      game.selectedCards = [];

      startAllSelectCountdown(game._id);

      await game.save();

      sendPopulateGame(game._id);
    })

    socket.on("rejoin", async data => {
      const player = await Player.findOne({
        _id: data.playerId
      })
      const game = await Game.findOne({
        players: player._id
      });
      socket.join(game.entranceCode);
      sendPopulateGame(game._id)
    })

    socket.on("send-message", async data => {
      const player = await Player.findOne({
        _id: data.playerId
      })
      io.to(data.code).emit("receive-message", {
        message: data.message,
        playerName: player.name
      });
    })

    socket.on("submit_card", async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      })
      const player = await Player.findOne({
        _id: data.playerId
      })

      const isAlreadySubmitted = game.selectedCards.some(selectedCard => {
        return String(selectedCard.player) == String(player._id)
      })
      if (!isAlreadySubmitted) {
        game.selectedCards.push({
          sentenceCard: data.sentenceCardId,
          player: data.playerId
        })
        const newCardsArray = player.sentenceCards.filter(savedCardId => {
          return savedCardId != data.sentenceCardId;
        })

        if (game.players.length - 1 == game.selectedCards.length) {
          game.status = "HOST_SELECTING";
          startHostCountdown(game._id);
        }

        player.sentenceCards = newCardsArray;
        await player.save();
        await game.save();

        sendPopulateGame(game._id);
      }
    });

    socket.on("leave-game", async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      });
      const leavingPlayer = await Player.findOne({
        _id: data.playerId
      });

      game.players = game.players.filter(playerId => {
        return String(playerId) != String(leavingPlayer._id)
      });

      await game.save();

      socket.leave(game.entranceCode);

      leavingPlayer.score = 0;
      leavingPlayer.sentenceCards = [];

      await leavingPlayer.save();

      sendPopulateGame(game._id);
      socket.emit("updated_game", null);
    })

    socket.on("timer-is-up", async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      });

      game.status = "HOST_SELECTING";

      await game.save();
      sendPopulateGame(game._id);
    });

    socket.on("winning-card-submission", async data => {
      give_score_to_player(data.selectedCardPlayerId);
      const game = await Game.findOne({
        entranceCode: data.code
      });
      game.status = "VIEW_WINNING_CARD";
      game.selectedCards = game.selectedCards.filter(card => {
        return String(card.player) == String(data.selectedCardPlayerId)
      });
      await game.save();
      popUpWinningCard(game.entranceCode);
      sendPopulateGame(game._id);
    })

    socket.on("disconnect", () => {
      console.log(`Connection ${socket.id} has left the building`);
    })
  })

  async function give_score_to_player(player_id) {
    const player = await Player.findOne({
      _id: player_id
    });
    player.score++;
    await player.save();
  }

  async function start_new_round(game_code, player_id) {
    const game = await Game.findOne({
      entranceCode: game_code
    });

    const playersArray = game.players
    let hostId = game.host
    let foundHost = playersArray.indexOf(hostId)
    if (foundHost === playersArray.length - 1) {
      foundHost = 0
    } else {
      foundHost++
    }
    let newHost = playersArray[foundHost]
    game.host = newHost

    game.currentImage = game.imageCards.pop()

    game.selectedCards = []

    for (let i = 0; i < game.players.length; i++) {
      const forEachPlayer = await Player.findOne({
        _id: game.players[i]
      });
      const newCard = game.sentenceCards.pop()
      if (forEachPlayer.sentenceCards.length < 7) {
        forEachPlayer.sentenceCards.push(newCard);
      }
      await forEachPlayer.save();
    }

    game.status = "ALL_SELECTING";

    await game.save();

    startAllSelectCountdown(game._id);
    sendPopulateGame(game._id);
  }

  async function startHostCountdown(gameId) {
    let countdown = 60;
    async function countdownFunction() {
      const countdownGame = await Game.findOne({
        _id: gameId
      });
      if (countdownGame.status != "HOST_SELECTING") {
        clearInterval(this);
        return;
      }
      countdown--;
      io.to(countdownGame.entranceCode).emit("receive-countdown", countdown)
      if (!countdown) {
        clearInterval(this);

        start_new_round(countdownGame.entranceCode)
        await countdownGame.save();
        sendPopulateGame(countdownGame._id);
      }
    }
    setInterval(countdownFunction, 1000);
  };

  async function startAllSelectCountdown(gameId) {
    let countdown = 30;
    async function countdownFunction() {
      const countdownGame = await Game.findOne({
        _id: gameId
      });
      if (countdownGame.status == "HOST_SELECTING") {
        clearInterval(this);
        return;
      }
      countdown--;
      io.to(countdownGame.entranceCode).emit("receive-countdown", countdown)
      if (!countdown) {
        clearInterval(this);
        countdownGame.status = "HOST_SELECTING";
        await countdownGame.save();
        startHostCountdown(countdownGame._id);
        sendPopulateGame(countdownGame._id);
      }
    }

    setInterval(countdownFunction, 1000);
  };

  async function popUpWinningCard(code) {
    let countdown = 10;
    async function countdownFunction() {

      countdown--;
      io.to(code).emit("receive-countdown", countdown)
      if (!countdown) {
        clearInterval(this);
        start_new_round(code);
      }
    }

    setInterval(countdownFunction, 1000);
  };
}