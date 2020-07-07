import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'



//action types
const GET_PLAYERS = 'GET_PLAYERS'
const ADD_PLAYER = 'ADD_PLAYER'
const CREATE_NEW_GAME = 'CREATE_NEW_GAME';


// action creator
export const getPlayers = (players) => {
    return {
        type: GET_PLAYERS,
        players
    }
}

export const createNewGame = (game) => {
    return {
        type: CREATE_NEW_GAME,
        game
    }
}

export const addedPlayer = (player) => {
    return {
        type: ADD_PLAYER,
        player
    }
}


// thunk
export const fetchPlayers = () => async (dispatch) => {
    const { data } = await axios.get('/api/players')
    console.log(data)
    dispatch(getPlayers(data))
}

export const fetchNewGame = (game) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/newGame', game)
        dispatch(createNewGame(data))
        
    } catch (error) {
        console.log('this is the error!', error)
        
    }
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
    game: {},
    player: {},
}


//reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PLAYERS:
            return {...state, players: action.players}
        case ADD_PLAYER:
                return [...state, action.player]
        case CREATE_NEW_GAME:
            return {...state, game: action.game}
         default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;