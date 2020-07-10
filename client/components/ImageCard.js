import React from "react";
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'



const ImageCards = (props) => {
  const imageCards = props.imageCards
  const image = imageCards[Math.floor(Math.random() * imageCards.length)]
  console.log(image)
    return (
      <div className="image-meme-style" >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image.image}/>
        </Card>   
      </div>
    )
}

const mapState = (state) => {
  return {
      game: state.game,
  }
}

export default connect(mapState)(ImageCards);

