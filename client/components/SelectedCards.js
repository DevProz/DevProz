import React from "react";
import { Card } from 'react-bootstrap'


const SelectedCards = (props) => {
      return (
        <div className='cards-row'> 
          {props.selectedCards.map((card) => 
            <Card>
              <Card.Body>
                 {card.sentenceCard.sentence}
              </Card.Body>
            </Card>
          )}
        </div>
    )
}

export default (SelectedCards);