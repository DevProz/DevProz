import React from "react";
import { Card, Row } from 'react-bootstrap'


const SelectedCards = (props) => {
      return (
        <Row className='cards-row'> 
          {props.selectedCards.map((card) => 
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                 {card.sentenceCard.sentence}
              </Card.Body>
            </Card>
          )}
        </Row>
    )
}

export default (SelectedCards);