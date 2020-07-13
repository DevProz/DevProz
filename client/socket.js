import io from 'socket.io-client'
import store, {updateNewGame, updatePlayer, receiveMessage } from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!');

  socket.on("updated_game", data => {
    store.dispatch(updateNewGame(data))
  })

  socket.on("receive-message", data => {
    store.dispatch(receiveMessage(data))
  })
})

  
export default socket