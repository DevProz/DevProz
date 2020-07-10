import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import socket from './socket'
import axios from 'axios'
import {createLogger} from "redux-logger";

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
    console.log("UPDATED")
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

const updatePlayer = player => {
    return {
        type: UPDATE_PLAYER , 
        player
    }
};

export const me = () => async dispatch => {
    try {
      const res = await axios.get("/api/newGame/me");
      if (res.data.sentenceCards.length) {
        const player = {playerId: res.data._id}
        console.log(res.data)
        socket.emit("rejoin", player)
      } else {
        dispatch(updatePlayer(res.data || defaultUser));
      }
    } catch (err) {
      console.error(err);
    }
  };

// thunk
export const fetchPlayers = () => async (dispatch) => {
    const { data } = await axios.get('/api/players')
    dispatch(getPlayers(data))
    
}

export const fetchNewGame = (player) => async () => {
    try {
        socket.emit("new_game", {playerId: player._id})
    } catch (error) {
        console.log('this is the error!', error)
        
    }
}


export const changeName = (playerName) => async (dispatch) => {
    try {
    const {data} = await axios.post('/api/players', playerName)
    dispatch(updatePlayer(data))
    } catch(error) {
        console.log(error)
    }
}


const initialState = {
    game: null,
    player: null
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
            const player = action.game.players.find(player => player._id)
            return {...state, game: action.game, player}
         default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));

export default store;