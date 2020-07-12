import React from "react";
import { Card } from 'react-bootstrap'


const SelectedCards = (props) => {
  console.log('this is props in selected cards', props)
      return (
        <div className='cards-row'> 
          {props.selectedCards.map((card) => 
            <Card>
              <Card.Body>
                 {card}
              </Card.Body>
            </Card>
          )}
        </div>
    )
}

export default (SelectedCards);