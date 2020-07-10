import React from "react";
import { Card, Button } from 'react-bootstrap'
import MySentenceCards from "./MySentenceCards";
import { connect } from 'react-redux'
import ImageCard from './ImageCard'
// import SelectedCards from './SelectedCards'
import Timer from './Timer'

class Game extends React.Component {
      
      render() {
        return (
            <div>
                THIS IS A GAME PAGE!
                <div className="row" className="d-flex justify-content-around">
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Header> Countdown:  </Card.Header>
                        <Card.Body>
                        <Card.Text>
                            <Timer/>
                        </Card.Text>
                        </Card.Body>
                </Card>
                <Card  border="info" style={{ width: '18rem' }}>
                    <Card.Header> Score:  </Card.Header>
                        <Card.Body>
                        <Card.Text>
                         {this.props.player.name} : {this.props.player.score}
                        </Card.Text>
                        </Card.Body>
                </Card>
                </div>
                <br />
                <ImageCard imageCards={this.props.game.imageCards}/>
                <div className="button-row">
                    <Button type='submit' variant='outline-light' className="button-submit-card">Submit Card</Button>
                </div>
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