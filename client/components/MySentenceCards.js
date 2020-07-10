import React from "react";
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import socket from '../socket'
import { me } from '../store'


class MySentenceCards extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }   

    handleSubmit(event){
        event.preventDefault()
        console.log('clicked!!!!', event.target.id)
        // socket.emit("start_game", { card: this.props.player._id, code: this.props.game.entranceCode})
        

    }

    render () {
        console.log('this is props', this.props)
        return (
            <div className="cards-row">
                {this.props.player.sentenceCards.map(card =>
                    <Card key={card._id}>
                        <Card.Body id={card._id}  style={{width: "10rem"}} onClick = {this.handleSubmit}>
                                    {card.sentence}
                        </Card.Body>
                    </Card>
                )}
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


export default connect(mapState)(MySentenceCards);

