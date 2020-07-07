import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import socket from './socket'
import axios from 'axios'

//action types
const GET_PLAYERS = 'GET_PLAYERS'
const ADD_PLAYER = 'ADD_PLAYER'
const UPDATE_NEW_GAME = 'UPDATE_NEW_GAME';
const UPDATE_PLAYER = 'UPDATE_PLAYER ';

export const getPlayers = (players) => {
    return {
        type: GET_PLAYERS,
        players
    }
}

export const updateNewGame = (game) => {
    return {
        type: UPDATE_NEW_GAME,
        game
    }
}

export const addedPlayer = (player) => {
    return {
        type: ADD_PLAYER,
        player
    }
}

const updatePlayer = player => ({
    type: UPDATE_PLAYER , 
    player
});

export const me = () => async dispatch => {
    try {
      const res = await axios.get("/api/newGame/me");
      dispatch(updatePlayer(res.data || defaultUser));
    } catch (err) {
      console.error(err);
    }
  };

// thunk
export const fetchPlayers = () => async (dispatch) => {
    const { data } = await axios.get('/api/players')
    dispatch(getPlayers(data))
    
}

export const fetchNewGame = (player) => async (dispatch) => {
    try {
        //const { data } = await axios.post('/api/newGame', game)
        socket.emit("new_game", {playerId: player._id})
        //dispatch(createNewGame(data))
        
        
    } catch (error) {
        console.log('this is the error!', error)
        
    }
}


export const addPlayer = (player) => async (dispatch) => {
    try {
    const {data} = await axios.post('/api/players', player)
    dispatch(addedPlayer(data))
    socket.emit('newPlayer', data);
    } catch(error) {
        console.log(error)
    }
}


const initialState = {
    game: {},
    player: {}
}

//reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PLAYERS:
            return {...state, players: action.players}
        case UPDATE_PLAYER:
            return {...state, player: action.player}
        case ADD_PLAYER:
                return {...state, player: action.player}
        case UPDATE_NEW_GAME:
            return {...state, game: action.game}
         default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;