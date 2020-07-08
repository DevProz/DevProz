import React from "react";
import { Button } from 'react-bootstrap'
import { fetchNewGame, me } from '../store'
import { connect } from 'react-redux'
import socket from '../socket'

class NewGame extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCodeSubmit = this.handleCodeSubmit.bind(this)
    }
    componentWillMount() {
        this.props.getMe()
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.getGame(this.props.player)
        this.props.history.push('/start')
    }

    handleCodeSubmit(event) {
        event.preventDefault();
        socket.emit("join_game", {playerId: this.props.player._id, code: event.target.code.value})
        this.props.history.push('/start')  
    }


    render() {
        return (
            <div>
                <h1>
                    This is the newGame button component
                </h1>
                <div className="new-game-join-game">
                <Button type='submit' onClick={this.handleSubmit}>New Game</Button>
                <form onSubmit={this.handleCodeSubmit}>
                <input
                type="text"
                // className=""
                placeholder="Ente your code ..."
                name="code"
                />
                 <Button type='submit'>Join Game</Button>
              </form>
                </div>
            </div>
        )
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
        getGame: (game) => dispatch(fetchNewGame(game)),
        getMe: () => dispatch(me())
    }
}



export default connect(mapState, mapDispatch)(NewGame)