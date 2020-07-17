import React from "react";
import { Button } from "react-bootstrap";
import { fetchNewGame, me } from "../store";
import { connect } from "react-redux";
import { FaCrown } from "react-icons/fa";
import socket from "../socket";

class NewGame extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
        this.handleDirections = this.handleDirections.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.getGame(this.props.player);
    }

    handleCodeSubmit(event) {
        event.preventDefault();
        socket.emit("join_game", {playerId: this.props.player._id, code: event.target.code.value});
    }

    handleDirections(event){
        event.preventDefault();
        const directions = document.getElementById("game-rules")
        if (directions.style.display === "block"){
            directions.style.display = "none"
        } else {
            directions.style.display = "block"
        }
    }

    render() {
        return (
            <div className="container-game-page">
                 <Button type="button" href="/change_name" className="button-create" variant="outline-light">Change name</Button>
                <div className="title-new-game-join-game">What Do You Meme</div>
                <p className="description">
                What Do You Meme™ is the adult party game taking the internet by storm. 
                Find out who will be crowned Meme Queen/King by competing with friends 
                (or family if you’re brave) to match photo cards with caption cards, 
                creating your own outrageously funny meme combinations. 
                It’s the perfect excuse to call up the crew, and get everyone together for guaranteed laughs.
                </p>
                <Button className="button-create" variant="outline-light" onClick={this.handleDirections}>Directions</Button>
                <div id="game-rules">
                <div className="title-new-game-join-game">How to Play</div>
                <h3>Setting up a game:</h3>
                <ul className="game-bullets">
                    <li>Choose one player to click the "Start New Game" button (that player will recieve a game code)</li>
                    <li>This player should send out the game code to all other participants</li>
                    <li>The remaining participants should enter the given game code and click the "Join Game" button</li>
                    <li>Once all participants names appear on the screen, the player who initially started the game can hit the "Start Game" button</li>
                    <li>The remaining participants should enter the given game code and click the 'Join Game' button</li>
                    <li>There is no specified maximum number of players, however at least 2 players are required to start the game. Our recommendation is 4-8 players</li>
                    <li>Once all participants names appear on the screen, the player who initially started the game can hit the 'Start Game' button</li>
                </ul>
                <h3>Game Rules:</h3>
                <ul className="game-bullets">
                    <li>Each player will be dealt 7 sentence cards</li>
                    <li>An image will be displayed in the center of the screen, each player will select and submit one sentence card they think best matches the image</li>
                    <li>Watch out for the time! You only have 30 seconds to submit a card otherwise you forfeit that round</li>
                    <li>A new host will be named at the start of each round. If you are the host, you will not submit a sentence card but rather you will chose the winning card once the players have submitted them</li>
                    <li>The player that submitted the winning card will be awarded 1 point</li>
                    <li>Again watch out for the time! The host has 60 seconds to choose a winner and if time runs out, the host will lose 1 point</li>
                    <li>The first player to reach 5 points wins and will be crowned Meme King or Queen! <FaCrown className="crown" /></li>
                    <li>Happy playing :)</li>
                </ul>
                </div>
                <div className="title-new-game-join-game">Lets Play!</div>
                <div className="new-game-join-game">
                    <Button type="submit" className="button-create" variant="outline-light" onClick={this.handleSubmit}>Start New Game</Button>
                    <div className="or-style">OR</div>
                    <form className="buttons" onSubmit={this.handleCodeSubmit}>
                        <Button type="submit" className="button-join" variant="outline-light">Join Game</Button>
                        <div className="arrow down"></div>
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