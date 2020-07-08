import React from "react";
import { Card, CardDeck } from 'react-bootstrap'


const MySentenceCards = (props) => {
    console.log('this is in the sentence component', props)

        return (
            <div>
            <CardDeck>
            <Card>
                <Card.Body>
                        <Card.Text>
                           {props.sentenceCards[0].sentence}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                        {props.sentenceCards[2].sentence}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                        {props.sentenceCards[1].sentence}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                        {props.sentenceCards[3].sentence}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                        {props.sentenceCards[0].sentence}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                        {props.sentenceCards[0].sentence}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                        <Card.Text>
                        {props.sentenceCards[0].sentence}
                        </Card.Text>
                </Card.Body>
            </Card>
            </CardDeck>       
        </div>
    )

}


export default (MySentenceCards);

