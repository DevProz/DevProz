import React from "react";
import { Card, CardDeck } from 'react-bootstrap'
import MySentenceCards from "./MySentenceCards";


class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    //   }
      
      render() {
        return (
            <div>
            THIS IS A GAME PAGE!
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>TIMER</Card.Header>
                    <Card.Body>
                    <Card.Text>
                        30
                    </Card.Text>
                    </Card.Body>
            </Card>
        <br />

            <MySentenceCards/>
           
         

        </div>
    )
}
}


export default (Game);