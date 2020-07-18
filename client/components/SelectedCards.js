import React from "react";
import { connect } from "react-redux";
import { Card, Row, Button } from "react-bootstrap";
import socket from "../socket";
import { FaCrown } from "react-icons/fa";

class  SelectedCards extends React.Component {
  constructor() {
    super()
    this.state = {
        active: null,
        winningPlayerId: null,
    }
    this.handleWinningSubmit = this.handleWinningSubmit.bind(this);
  }  

  handleWinningSubmit(){
    event.preventDefault();
    socket.emit("winning-card-submission",{
        code: this.props.game.entranceCode, 
        selectedCardPlayerId: this.state.winningPlayerId
    } )
  }

  handleClick(cardId, cardPlayerId){
    if (this.state.active) {
        this.setState({active: null});
    } else {
        this.setState({ active: cardId, winningPlayerId: cardPlayerId });   
    }
  }

  render () {  
    if (this.props.game.status == "VIEW_WINNING_CARD") {
      return (
        <div>
          <div className="crown-align">
           <FaCrown color="yellow" size={60}/>
            <div className="winner-name">{this.props.selectedCards.map((card) => card.player.name)}</div>
           </div>
          <Row className="winning-row"> 
          {this.props.selectedCards.map((card) => 
            <Card className="winning-card-pop-up" style={{ width: "30rem" }} key={card._id}>      
              <Card.Body className="winning-card-text">
                {card.sentenceCard.sentence}
              </Card.Body>
            </Card>
          )}
        </Row>
      </div>
    )}

    else if (this.props.game.status == "ALL_SELECTING") {
      return (
        <Row className="cards-row"> 
        {this.props.selectedCards.map((card) => 
          <Card style={{ width: "10rem" }} key={card._id}>
            <Card.Body style={{ width: "10rem" }}>
                <div>{card.player.name}</div>
            </Card.Body>
          </Card>
        )}
      </Row>

      )} else {
      return (
        <div>
        <Row className="selectedCardButton-Row">
        {(this.props.game.host === this.props.player._id) && (this.props.game.status === "HOST_SELECTING") ? <Button className="button-choose-winner" variant="outline-light" type="button" onClick={this.handleWinningSubmit}>Submit Winner Card</Button> : console.log("A winner has not been submitted yet")}
        </Row>
        <Row className="cards-row"> 
          {this.props.selectedCards.map((card) => 
            <Card style={{ width: "10rem" }} key={card._id}>
              <Card.Body className = {this.state.active === card._id ? "winner" : null}
              id={card._id} title={card.player} onMouseUp = {() => this.handleClick(card._id, card.player._id)} style={{ width: "10rem" }}>
                 {card.sentenceCard.sentence}
              </Card.Body>
            </Card>
          )}
        </Row>
      </div>
    )}
  }
} 

const mapState = (state) => {
    return {
        game: state.game,
        player: state.player
    }
}

export default connect(mapState)(SelectedCards);