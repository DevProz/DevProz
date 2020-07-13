const Game = require('../db/models/game');
const Player = require('../db/models/player');
const ImageCard = require('../db/models/imageCard')
const SentenceCard = require('../db/models/sentenceCard');
const {
  update
} = require('../db/models/game');
const player = require('../db/models/player');

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
    }).populate('players').populate({
      path: 'players',
      populate: {
        path: 'sentenceCards',
        model: 'SentenceCard'
      }
    }).populate('imageCards').populate('sentenceCards').populate({
      path: 'selectedCards',
      populate: {
        path: 'sentenceCard',
        model: 'SentenceCard'
      }
    }).then(populatedGame => {
      console.log("sending back game")
      io.to(populatedGame.entranceCode).emit('updated_game', populatedGame);
    })
  }

  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`);

    socket.on('new_game', async data => {
      console.log("new game")
      const player = await Player.findOne({
        _id: data.playerId
      })
      player.sentenceCards = [];
      await player.save();
      const imageCards = await ImageCard.find();
      const sentenceCards = await SentenceCard.find();
      const code = Math.random().toString(36).substring(2, 6).toUpperCase();
      const newGame = new Game({
        players: [player],
        imageCards: imageCards,
        sentenceCards: sentenceCards,
        entranceCode: code
      })

      await newGame.save();
      socket.join(newGame.entranceCode)
      sendPopulateGame(newGame._id);
    })

    socket.on('join_game', async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      })
      if (!game.players.includes(data.playerId)) {
        game.players.push(data.playerId);
        await game.save();
      }
      socket.join(game.entranceCode)
      sendPopulateGame(game._id);
    })

    socket.on('start_game', async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      })

      const newImageCardsDeck = shuffleArray(game.imageCards);
      const oneImage = newImageCardsDeck.slice(0, 1);
      game.imageCards = oneImage;

      const newDeck = shuffleArray(game.sentenceCards);
      await game.players.forEach(async playerId => {
        const player = await Player.findOne({
          _id: playerId
        })
        const cards = newDeck.splice(0, 7);
        player.sentenceCards = cards;
        await player.save();
      })

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

    socket.on('send-message', async data => {
      const player = await Player.findOne({
        _id: data.playerId
      })
      io.to(data.code).emit('receive-message', {
        message: data.message,
        playerName: player.name
      });
    })

    socket.on('submit_card', async data => {
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
        player.sentenceCards = newCardsArray;
        await player.save();
        await game.save();

        sendPopulateGame(game._id);
      }
    });

    socket.on('leave-game', async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      });
      const leavingPlayer = await Player.findOne({
        _id: data.playerId
      });
      game.players = game.players.filter(player => {
        player._id != leavingPlayer._id
      });
      await game.save();
      socket.leave(game.entranceCode);
      leavingPlayer.score = 0;
      leavingPlayer.sentenceCards = [];
      await leavingPlayer.save();
      socket.emit("updated_game", null);
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`);
    })
  })
}