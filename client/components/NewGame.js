import React from "react";
import { Button } from 'react-bootstrap'
import { fetchNewGame, me } from '../store'
import { connect } from 'react-redux'

class NewGame extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentWillMount() {
        this.props.getMe()
    }

    handleSubmit(event){
        console.log('clicked!')
        event.preventDefault()
        this.props.getGame(this.props.player)
    }


    render() {
        return (
            <div>
                <h1>
                    This is the newGame button component
                </h1>
                <Button type='submit' onClick={this.handleSubmit}>New Game</Button>
                <Button type='submit'>Join Game</Button>

            </div>
        )
    }
}

const mapState = (state) => {
    console.log(state)
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