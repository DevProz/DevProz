import React from "react";
import { Button } from 'react-bootstrap'
import { fetchNewGame } from "../store";
import { connect } from 'react-redux'

class StartGame extends React.Component {

    componentDidMount(){
        this.props.getGame(this.props.player)
    }
  

    render() {
        console.log('this is props in start game', this.props)
        return (
            <div>
                <h1>
                    This is the START GAME component
                </h1>
                <h3>Code: {this.props.game.entranceCode}</h3>
                <h4>{this.props.player.name}</h4>
                {/* <h4>{this.props.game.players.map((player) => {
                    return <ol>
                        <li>{player._id}</li>
                    </ol>
                })}</h4> */}
                <Button type='submit'>Start Game</Button>
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
        getGame: (game) => dispatch(fetchNewGame(game))
    }
}





export default connect(mapState, mapDispatch)(StartGame)