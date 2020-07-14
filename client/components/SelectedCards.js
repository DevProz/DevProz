import React from "react";
import { connect } from 'react-redux';
import { Card, Row } from 'react-bootstrap'


class  SelectedCards extends React.Component {
  constructor(){
    super()
    this.state = {
        active: null,
    }
}  

        handleClick(cardId){
          if (this.state.active) {
              this.setState({active: null});
          } else {
              this.setState({ active: cardId });   
          }
        }

      render () {  
        console.log("selected card state", this.props)
      return (
        <Row className='cards-row'> 
          {this.props.selectedCards.map((card) => 
            <Card style={{ width: '10rem' }} key={card._id}>
              <Card.Body className = {this.state.active === card._id ? "active" : null}
              id={card._id} title={card.sentenceCard.sentence} onClick = {() => this.handleClick(card._id, event)} style={{ width: '10rem' }}>
                 {card.sentenceCard.sentence}
              </Card.Body>
            </Card>
          )}
        </Row>
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