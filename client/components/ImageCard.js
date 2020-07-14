import React from "react";
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';



const ImageCards = (props) => {
  const currentImage = props.currentImage
    return (
      <div className="image-meme-style" >
        <Card>
          <Card.Img variant="top" src={currentImage.image}/>
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

