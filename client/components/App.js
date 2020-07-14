import React from "react";
import { connect } from 'react-redux'
import ChangeName from "./ChangeName";
import NewGame from './NewGame'
import Game from './Game'
import StartGame from './StartGame'
import { me } from '../store'

class App extends React.Component {
    componentWillMount() {
        this.props.getMe()
    }

    render () {
        if (this.props.player == null){
            return <ChangeName />
        }
        else if (this.props.game == null && this.props.player.name) {
            return <NewGame />
        }
        else if (this.props.game != null && this.props.player.sentenceCards && !this.props.player.sentenceCards.length) {
            return <StartGame />
        }
        else if (this.props.game != null && this.props.player.sentenceCards && this.props.player.sentenceCards.length) {
            return <Game />
        }
        else {
            return <ChangeName />
        }
    }
}


const mapState = (state) => {
    return {
        game: state.game,
        player: state.player
    }
}

const mapDispatch = (dispatch) => {
    return {
        getMe: () => dispatch(me())
    }
}

export default connect(mapState, mapDispatch)(App);