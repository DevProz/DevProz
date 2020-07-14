import React from 'react';
import { connect } from 'react-redux';
import ChangeName from './ChangeName';
import NewGame from './NewGame';
import Game from './Game';
import StartGame from './StartGame';
import { me } from '../store';

class App extends React.Component {
  componentWillMount() {
    this.props.getMe();
  }

  render() {
    if (this.props.player == null) {
      return <ChangeName />;
    } if (this.props.game == null && this.props.player.name) {
      return <NewGame />;
    } if (this.props.game != null && this.props.player.sentenceCards && !this.props.player.sentenceCards.length) {
      return <StartGame />;
    } if (this.props.game != null && this.props.player.sentenceCards && this.props.player.sentenceCards.length) {
      return <Game />;
    }
    return <ChangeName />;
  }
}

const mapState = (state) => ({
  game: state.game,
  player: state.player,
});

const mapDispatch = (dispatch) => ({
  getMe: () => dispatch(me()),
});

export default connect(mapState, mapDispatch)(App);
