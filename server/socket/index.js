const Game  = require('../db/models/game');
const Player = require('../db/models/player');
const ImageCard = require('../db/models/imageCard')
const SentenceCard = require('../db/models/sentenceCard')

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5)
// }



module.exports = io => {
    io.on('connection', socket => {
      console.log(`A socket connection to the server has been made: ${socket.id}`)

      socket.on('new_game', async data => {
        console.log(data)
        const player = await Player.findOne({_id: data.playerId})
        const imageCards = await ImageCard.find()
        const sentenceCards = await SentenceCard.find()
        const code = Math.random().toString(36).substring(2, 6).toUpperCase();
        const newGame = new Game({
            players: [player],
            imageCards: imageCards,
            sentenceCards: sentenceCards,
            entranceCode: code
        })
        console.log(newGame)
      
        await newGame.save()
        Game.findOne({_id: newGame._id}).populate("players").populate("imageCards").populate("sentenceCards").then(populatedGame => {
          socket.join(code)
          socket.emit("new_game_created", populatedGame)
        })
      })
     
      // socket.on('joining', data => {
      //   console.log('YOU DID IT!!!!')
      //   console.log(data)
      // });

      

  
      socket.on('disconnect', () => {
        console.log(`Connection ${socket.id} has left the building`)
      })
    })

  }


