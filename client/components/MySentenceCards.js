import React from "react";
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import socket from '../socket'
import { me } from '../store'


class MySentenceCards extends React.Component {
    constructor(){
        super()
        this.state = {
            active: null,
        }
    }   

    handleSubmit(id){
        if (this.state.active) {
            this.setState({active: null})
        } else {
            this.setState({ active: id });   
        }
    }

    render () {
        console.log('this is props', this.props)
        return (
            <div className="cards-row">
                {this.props.player.sentenceCards.map((card, id) =>
                    <Card key={card._id}>
                        <Card.Body className = {this.state.active === id ? "active" : null}
                        id={card._id}  style={{width: "10rem"}} onClick = {() => this.handleSubmit(id)}>
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

