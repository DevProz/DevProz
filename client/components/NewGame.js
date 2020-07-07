import React from "react";
import { Button } from 'react-bootstrap'
import { fetchNewGame } from '../store'
import { connect } from 'react-redux'

class NewGame extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        console.log('clicked!')
        event.preventDefault()
        this.props.getGame(event.target.game)

    }


    render() {
        console.log('this is props', this.props)
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
    console.log('this is the state', state)
    return {
        game: state.game
    }
}

const mapDispatch = (dispatch) => {
    return {
        getGame: (game) => dispatch(fetchNewGame(game))
    }
}





export default connect(mapState, mapDispatch)(NewGame)