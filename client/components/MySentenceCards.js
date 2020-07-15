import React from "react";
import { connect } from "react-redux";
import { Card, Button, Col } from "react-bootstrap";
import socket from "../socket";

class MySentenceCards extends React.Component {
    constructor(){
        super()
        this.state = {
            active: null,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }   

    handleSubmit(event) {
        event.preventDefault();
        socket.emit("submit_card", {code: this.props.game.entranceCode, sentenceCardId: this.state.active, playerId: this.props.player._id});
    }

    handleClick(cardId){
        if (this.state.active) {
            this.setState({active: null});
        } else {
            this.setState({ active: cardId });   
        }
    }

    render () {
        return (
            <Col>
                <div className="button-row">
                {(this.props.player._id !== this.props.game.host && this.props.game.status == "ALL_SELECTING") 
                    ? <Button onClick ={this.handleSubmit} disabled={!(!!this.state.active)} type="submit" variant="outline-light" className="button-submit-card">Submit Card</Button> 
                    : console.log("you are host") }
                </div>
                <div className="cards-row">   
                    {this.props.player.sentenceCards.map((card) =>
                        <Card className="sentenceCards" style={{ width: "10rem" }} key={card._id}>
                            <Card.Body className = {this.state.active === card._id ? "active" : null}
                            id={card._id} title={card.sentence} onClick = {() => this.handleClick(card._id, event)} style={{ width: "10rem" }}>
                                    {card.sentence}   
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </Col>
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

