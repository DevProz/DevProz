import React from "react";
import { Button } from "react-bootstrap";
import { fetchNewGame, me } from "../store";
import { connect } from "react-redux";
import socket from "../socket";

class NewGame extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.getGame(this.props.player);
    }

    handleCodeSubmit(event) {
        event.preventDefault();
        socket.emit("join_game", {playerId: this.props.player._id, code: event.target.code.value});
    }

    render() {
        return (
            <div className="container-game-page">
                 <Button type="button" href="/change_name" className="button-create" variant="outline-light">Change name</Button>
                <div className="title-new-game-join-game">How to play</div>
                <p className="description">
                Find 4 or more players, start new game, and share the code with your friends.
                What Do You Meme™ is the adult party game taking the internet by storm. 
                Find out who will be crowned Meme Queen/King by competing with friends 
                (or family if you’re brave) to match photo cards with caption cards, 
                creating your own outrageously funny meme combinations. 
                It’s the perfect excuse to call up the crew, and get everyone together for guaranteed laughs.
                </p>
                <div className="new-game-join-game">
                    <Button type="submit" className="button-create" variant="outline-light" onClick={this.handleSubmit}>Start New Game</Button>
                    <form className="buttons" onSubmit={this.handleCodeSubmit}>
                        <Button type="submit" className="button-join" variant="outline-light">Join Game</Button>
                        <input
                        type="text"
                        className="input-enter-code"
                        placeholder="Enter your code ..."
                        name="code"
                        />
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

export default connect(mapState, mapDispatch)(NewGame);