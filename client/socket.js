import io from 'socket.io-client'
import store, { addedPlayer } from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')

  socket.on('newPlayer', data => {
    console.log('you did it on the front end!')
    store.dispatch(addedPlayer(data));
  });
})

export default socket