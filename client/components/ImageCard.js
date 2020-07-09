import React from "react";
import { Card, CardDeck } from 'react-bootstrap'


const ImageCards = (props) => {
    console.log('this is in the image component', props)

        return (
            <div  className="d-block mx-auto img-fluid w-50" >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageCards[0].image}/>
             </Card>   
            </div>
    )

}


export default (ImageCards);

