import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'


//action types
const GET_PLAYERS = 'GET_PLAYERS'

//action creator
export const getPlayers = (players) => {
    return {
        type: GET_PLAYERS,
        players
    }
}



//thunk
export const fetchPlayers = () => async (dispatch) => {
    const { data } = await axios.get('/api/players')
    dispatch(getPlayers(data))
}


const initialState = {
    players: []
}


//reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PLAYERS:
            return {...state, players: action.players}
        default:
            return state
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;