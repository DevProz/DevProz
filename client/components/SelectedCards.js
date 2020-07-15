import React from "react";
import { connect } from 'react-redux';
import { Card, Row, Button } from 'react-bootstrap'
import socket from '../socket';


class  SelectedCards extends React.Component {
  constructor(){
    super()
    this.state = {
        active: null,
        winningCard: null
    }
    this.handleWinningSubmit = this.handleWinningSubmit.bind(this)
}  

        handleWinningSubmit(){
          event.preventDefault();
          socket.emit("new_round",{
              playerId: this.props.player._id,
              code: this.props.game.entranceCode, 
              selectedCardId: this.state.active,
              selectedCardPlayerId: this.state.winningCard
          } )
        }

        handleClick(cardId, cardPlayerId){
          if (this.state.active) {
              this.setState({active: null});
          } else {
              this.setState({ active: cardId, winningCard: cardPlayerId });   
          }
        }

      render () {  
        console.log("selected card state", this.props)
      return (
        <div>
        <Row className="selectedCardButton-Row">
        {(this.props.game.host === this.props.player._id) && (this.props.game.selectedCards.length === this.props.game.players.length) ? <Button className="button-choose-winner" variant="outline-light" type='button' onClick={this.handleWinningSubmit}>Submit Winner Card</Button> : console.log('A winner has not been submitted yet')}
        </Row>

        <Row className='cards-row'> 
          {this.props.selectedCards.map((card) => 
            <Card style={{ width: '10rem' }} key={card._id}>
              <Card.Body className = {this.state.active === card._id ? "winner" : null}
              id={card._id} title={card.player} onClick = {() => this.handleClick(card._id, card.player)} style={{ width: '10rem' }}>
                 {card.sentenceCard.sentence}
              </Card.Body>
            </Card>
          )}
        </Row>
      </div>
    )
  }
} 

const mapState = (state) => {
  console.log("state SC", state)
  return {
      game: state.game,
      player: state.player
  }
}

export default connect(mapState)(SelectedCards);