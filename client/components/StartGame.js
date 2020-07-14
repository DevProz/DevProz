import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import socket from '../socket';

class StartGame extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    socket.emit('start_game', { playerId: this.props.player._id, code: this.props.game.entranceCode });
  }

  render() {
    if (!this.props.game.players) return <div className="title-new-game">Loading...</div>;
    return (
      <div>
        <div className="title-new-game">
          New Game
        </div>
        <h3 className="code-style">
          Code:
          {this.props.game.entranceCode}
        </h3>
        <h4>
          {this.props.game.players.map((player) => (
            <ol>
              <li className="names">{player.name}</li>
            </ol>
          ))}
        </h4>
        <div className="start-button-align">
          {(this.props.game.players[0]._id === this.props.player._id) ? <Button className="button-start-game" variant="outline-light" type="submit" onClick={this.handleSubmit}>Start Game</Button> : <div className="please-wait">Waiting for host to start the game...</div>}
        </div>

      </div>
    );
  }
}

const mapState = (state) => ({
  game: state.game,
  player: state.player,
});

export default connect(mapState)(StartGame);
