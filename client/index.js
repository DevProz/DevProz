import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {Provider} from "react-redux";

ReactDOM.render(
    <App /> ,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);