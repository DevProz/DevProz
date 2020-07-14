import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from "./components/App";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChangeName from './components/ChangeName';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Switch>
        <Route path="/change_name" component={ChangeName} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider> ,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);