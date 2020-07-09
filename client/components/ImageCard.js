import React from "react";
import { Card, CardDeck } from 'react-bootstrap'


const ImageCards = (props) => {
    console.log('this is in the sentence component', props)

        return (
            <div className="image-meme-style" >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80/200px2000" />
             </Card>   
            </div>
    )

}


export default (ImageCards);

