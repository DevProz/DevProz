import React from "react";
import { Card } from 'react-bootstrap'


const ImageCards = (props) => {
  const currentImage=props.imageCards.slice(0, 1)
  console.log('image after slice', currentImage)
    return (
      <div  className="d-block mx-auto img-fluid w-50" >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={currentImage[0].image}/>
        </Card>   
      </div>
    )
}

export default (ImageCards);
