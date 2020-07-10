const Game = require('../db/models/game');
const Player = require('../db/models/player');
const ImageCard = require('../db/models/imageCard')
const SentenceCard = require('../db/models/sentenceCard')

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('new_game', async data => {
      const player = await Player.findOne({
        _id: data.playerId
      })
      player.sentenceCards = []
      await player.save()
      const imageCards = await ImageCard.find()
      const sentenceCards = await SentenceCard.find()
      const code = Math.random().toString(36).substring(2, 6).toUpperCase();
      const newGame = new Game({
        players: [player],
        imageCards: imageCards,
        sentenceCards: sentenceCards,
        entranceCode: code
      })

      await newGame.save()
      Game.findOne({
        _id: newGame._id
      }).populate("players").populate("imageCards").populate("sentenceCards").then(populatedGame => {
        socket.join(code)
        socket.emit("new_game_created", populatedGame)
      })
    })

    socket.on('join_game', async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      })
      if (!game.players.includes(data.playerId)) {
        game.players.push(data.playerId)
        await game.save()
      }
      Game.findOne({
        _id: game._id
      }).populate("players").populate("imageCards").populate("sentenceCards").then(populatedGame => {
        socket.join(data.code)
        io.to(data.code).emit("updated_game", populatedGame)
      })
    })

    //find Game.sentenceCards and shuffle them
    //populates Player sentence cards
    socket.on('start_game', async data => {
      const game = await Game.findOne({
        entranceCode: data.code
      })
      const newDeck = shuffleArray(game.sentenceCards)
      await game.players.forEach(async playerId => {
        const player = await Player.findOne({
          _id: playerId
        })
        const cards = newDeck.splice(0, 7) //selecting 7 cards on top of sentenceCards array
        player.sentenceCards = cards
        await player.save()
      })

      Game.findOne({
        _id: game._id
      }).populate("players").populate({
        path: "players",
        populate: {
          path: "sentenceCards",
          model: "SentenceCard"
        }
      }).populate("imageCards").populate("sentenceCards").then(populatedGame => {
        io.to(data.code).emit("updated_game", populatedGame)
      })
    })

    socket.on("rejoin", async data => {
      const player = await Player.findOne({
        _id: data.playerId
      })
      console.log(data)
      const game = await Game.findOne({players: player._id})
      socket.join(game.entranceCode)
      Game.findOne({
        _id: game._id
      }).populate("players").populate({
        path: "players",
        populate: {
          path: "sentenceCards",
          model: "SentenceCard"
        }
      }).populate("imageCards").populate("sentenceCards").then(populatedGame => {
        socket.emit("updated_game", populatedGame)
      })
    })

    socket.on("send-message", async data => {
      const player = await Player.findOne({
        _id: data.playerId
      })
      io.to(data.code).emit("receive-message", {message: data.message, playerName: player.name})
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}