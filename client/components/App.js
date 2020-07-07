import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import NewGame from './NewGame'

const App = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/join' component={NewGame}/>
                </Switch>
            </Router>
    )
}

export default App;