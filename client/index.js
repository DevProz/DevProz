import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from "./components/App";
import { Router } from 'react-router-dom'
import history from './history'


//establishing a socket connection
import './socket'


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App /> 
    </Router>
  </Provider> ,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);