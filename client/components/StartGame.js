import React from "react";
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class StartGame extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        this.props.history.push('/game')
    }
  

    render() {
        console.log('this is props in start game', this.props)
        if (!this.props.game.players) return <h1>Loading</h1>
        return (
            <div>
                <h1>
                    This is the START GAME component
                </h1>
                <h3>Code: {this.props.game.entranceCode}</h3>
                <h4>{this.props.game.players.map((player) => {
                    return <ol>
                        <li>{player.name}</li>
                    </ol>
                })}</h4>

                {(this.props.game.players[0]._id === this.props.player._id) ? <Button type='submit' onClick={this.handleSubmit}>Start Game</Button> :  <h1>Wait for host to start game</h1>}
                
                
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






export default connect(mapState)(StartGame)