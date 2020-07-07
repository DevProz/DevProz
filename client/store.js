import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'


//action types
const GET_PLAYERS = 'GET_PLAYERS'
const ADD_PLAYER = 'ADD_PLAYER'

//action creator
export const getPlayers = (players) => {
    return {
        type: GET_PLAYERS,
        players
    }
}

export const addedPlayer = (player) => {
    return {
        type: ADD_PLAYER,
        player
    }
}


//thunk
export const fetchPlayers = () => async (dispatch) => {
    const {data} = await axios.get('/api/players')
    dispatch(getPlayers(data))
}


export const addPlayer = (player) => async (dispatch) => {
    try {
    const {data} = await axios.post('/api/players', player)
    dispatch(addedPlayer(data))
    } catch(error) {
        console.log(error)
    }
}


const initialState = {
    players: []
}


//reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PLAYERS:
            return {...state, players: action.players}
        case GET_PLAYERS:
            return {...state, players: action.players}
        case ADD_PLAYER:
                return [...state, action.player]
        default:
            return state
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;