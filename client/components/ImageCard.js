import React from "react";
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'



const ImageCards = (props) => {
  const imageCard = props.imageCards
    return (
      <div className="image-meme-style" >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageCard[0].image}/>
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

