import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import socket from './socket';
import game from '../server/db/models/game';

// action types
const GET_PLAYERS = 'GET_PLAYERS';
const ADD_PLAYER = 'ADD_PLAYER';
const UPDATE_NEW_GAME = 'UPDATE_NEW_GAME';
const UPDATE_PLAYER = 'UPDATE_PLAYER ';
const SELECTED_CARD = 'SELECTED_CARD';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const getPlayers = (players) => ({
  type: GET_PLAYERS,
  players,
});

export const updateNewGame = (game) => ({
  type: UPDATE_NEW_GAME,
  game,
});

export const addedPlayer = (player) => ({
  type: ADD_PLAYER,
  player,
});

export const updatePlayer = (player) => ({
  type: UPDATE_PLAYER,
  player,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/newGame/me');
    dispatch(updatePlayer(res.data || defaultUser));
    if (res.data.sentenceCards.length) {
      const player = { playerId: res.data._id };
      socket.emit('rejoin', player);
    }
  } catch (error) {
    console.error(error);
  }
};

// thunk
export const fetchPlayers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/players');
    dispatch(getPlayers(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewGame = (player) => async () => {
  try {
    socket.emit('new_game', { playerId: player._id });
  } catch (error) {
    console.log(error);
  }
};

export const changeName = (playerName) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/players', playerName);
    dispatch(updatePlayer(data));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  game: null,
  player: null,
  messages: [],
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return { ...state, players: action.players };
    case UPDATE_PLAYER:
      return { ...state, player: action.player };
    case ADD_PLAYER:
      return { ...state, player: action.player };
    case UPDATE_NEW_GAME:
      if (action.game != null) {
        const player = action.game.players.find((player) => player._id == state.player._id);
        return { ...state, game: action.game, player };
      }
      return {
        ...state, game: action.game, player: { ...state.player, sentenceCards: [], score: 0 }, messages: [],
      };

    case RECEIVE_MESSAGE:
      return { ...state, messages: [...state.messages, action.message] };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));

export default store;
