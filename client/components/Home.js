import React from "react";
import {addPlayer} from "../store";
import { connect } from "react-redux";
import player from "../../server/db/models/player";
import Axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    name: '',
    }; 

 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //  componentDidMount(){
  //   this.props.addPlayer()
  // }


  handleChange(event) {
    this.setState({
        name: event.target.value,
    });
  }

 handleSubmit(event) {
    event.preventDefault();
    this.props.addPlayer()
  }

  render() {
    console.log('props', this.props)

    return (
      <div>
        <h1>This is the home page:)</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Please enter your name 
            <input type="text" name={this.state.name} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <h3>Players:</h3>
        {/* {this.props.players.map((player) => {
          return <li>{player.name}</li>;
        })} */}
      </div>
    );
  }
}

const mapState = (state) => {
    return {
        players: state.players,
        player: state.player

    }
}

const mapDispatch = (dispatch) => {
    return {
        getPlayers : () => dispatch(fetchPlayers()),
        addPlayer: (player) => dispatch(addPlayer(player)),
    }
}

export default connect(mapState, mapDispatch)(Home);
