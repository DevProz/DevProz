import React from "react";
import { Card } from 'react-bootstrap'
import MySentenceCards from "./MySentenceCards";
import { connect } from 'react-redux'
import ImageCard from './ImageCard'

class Game extends React.Component {
      
      render() {
          console.log('this is the props from main game componenet', this.props)
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
            <ImageCard/>
            <MySentenceCards sentenceCards={this.props.game.sentenceCards}/>
        </div>
    )
  }
}

const mapState = (state) => {
    return {
        game: state.game,
        player: state.player
    }
}


export default connect(mapState)(Game)