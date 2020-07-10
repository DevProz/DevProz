import React from "react";
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'



const ImageCards = (props) => {
  const imageCard = props.imageCards
  console.log('this is props in imageCards', props)
  console.log('this is the single image card', imageCard)
  // const image = imageCards[Math.floor(Math.random() * imageCards.length)]
    return (
      <div className="image-meme-style" >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageCard[0].image}/>
        </Card>   
      </div>
    )
}

const mapState = (state) => {
  console.log('this is state', state)
  return {
      game: state.game,
  }
}

export default connect(mapState)(ImageCards);

