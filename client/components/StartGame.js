import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import socket from "../socket";

class StartGame extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        socket.emit("start_game", { playerId: this.props.player._id, code: this.props.game.entranceCode});
    }

    render() {
        if (!this.props.game.players) return <div className="title-new-game">Loading...</div>
        return (
            <div>
                <div className="title-new-game">
                    New Game
                </div>
                <div className='requiring-players'>**requires at least two players</div>
                <h3 className="code-style">Code: {this.props.game.entranceCode}</h3>
                <h4>{this.props.game.players.map((player) => {
                    return <ol>
                        <li className="names">{player.name}</li>
                    </ol>
                })}</h4>
                <div className="start-button-align">
                    {(this.props.game.players[0]._id === this.props.player._id) 
                    ? <Button className="button-start-game" variant="outline-light" type="submit"  disabled={this.props.game.players.length < 2} onClick={this.handleSubmit}>Start Game</Button> 
                    : <div className="loader-back">
                        <div className="ex-container">
                            <div class="ex"></div>
                            <div class="ex"></div>
                            <div class="ex"></div>
                            <div class="ex"></div>
                            <div className="please-wait head2 text-center">
                                Waiting for host to start the game...
                            </div>
                        </div>
                    </div>
                    } 
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

export default connect(mapState)(StartGame);