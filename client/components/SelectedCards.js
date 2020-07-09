import React from "react";
import { Card, CardDeck } from 'react-bootstrap'


const SelectedCards = (props) => {
      return (
        <div> 
          <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Text>
                  Player1
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Text>
                  Player2
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Text>
                  Player3
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                  bg="secondary"
                  style={{ width: '16rem' }}
                  className="mb-2"
                > 
                <Card.Body>
                </Card.Body>
              </Card>
              <Card
                  bg="secondary"
                  style={{ width: '16rem' }}
                  className="mb-2"
                > 
                <Card.Body>
                </Card.Body>
              </Card>
              <Card
                  bg="secondary"
                  style={{ width: '16rem' }}
                  className="mb-2"
                > 
                <Card.Body>
                </Card.Body>
              </Card>
          </CardDeck>
        </div>
    )
}

export default (SelectedCards);