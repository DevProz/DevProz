

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5)
// }



module.exports = io => {
    io.on('connection', socket => {
      console.log(`A socket connection to the server has been made: ${socket.id}`)

     
      socket.on('newPlayer', data => {
        socket.broadcast.emit('newPlayer', data);
        console.log('YOU DID IT!!!!')
        // game.players[socket.id] = {
        //   sentenceCards: game.sentenceCards.slice(0, 7)
        // }

      });

      

  
      socket.on('disconnect', () => {
        console.log(`Connection ${socket.id} has left the building`)
      })
    })

  }


