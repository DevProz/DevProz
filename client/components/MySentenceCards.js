import React from "react";
import { Card, CardDeck } from 'react-bootstrap'


class MySentenceCards extends React.Component {

      
      render() {
        return (
            <div>
            <CardDeck>
            <Card>
                <Card.Body>
                        <Card.Text>
                           Card1
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                           Card2
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                           Card 3
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                       Card4
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                         Card5
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                          Card6
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                           Card7
                        </Card.Text>
                </Card.Body>
            </Card>
            </CardDeck>       
        </div>
    )
}
}


export default (MySentenceCards);