import io from 'socket.io-client'
import store, {updateNewGame } from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!');

  socket.on("new_game_created", data => {
    console.log(data.entranceCode)
    store.dispatch(updateNewGame(data))
  })

  socket.on("player_joined", data => {
    store.dispatch(updateNewGame(data))
  })
})

export default socket