import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import NewGame from './NewGame'
import Game from './Game'

const App = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/join' component={NewGame}/>
                    <Route exact path='/game' component={Game}/>
                </Switch>
            </Router>
    )
}

export default App;