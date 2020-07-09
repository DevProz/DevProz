import React from "react";
import { Card, CardDeck } from 'react-bootstrap'


const MySentenceCards = (props) => {
   const myCards=props.sentenceCards.slice(0, 7)
      return (
        <div className="cards-row">
          <CardDeck>
            {myCards.map(el => 
              <Card className="card-itself">
                <Card.Body>
                  <Card.Text>
                  {el.sentence}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </CardDeck>
        </div>
    )
}

export default (MySentenceCards);

