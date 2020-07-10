import React from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import MySentenceCards from "./MySentenceCards";
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import Chat from "./Chat";
import Timer from './Timer';

class Game extends React.Component {
      
      render() {
        return (
            <div>
            <div className="title-game-page">
              <p className="what-color">WHAT</p>
              <p className="do-color">DO </p>
              <p className="you-color">YOU </p>
              <p className="meme-color">MEME</p>
              <p className="question-mark-color">?</p>
            </div>
                <Row>
                    <Col>
                    <Card border="info board-margin" style={{ width: '15rem' }}>
                        <Card.Header> Countdown:  </Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <Timer/>
                            </Card.Text>
                            </Card.Body>
                    </Card>
                    <Card  border="info" style={{ width: '15rem' }}>
                        <Card.Header> Score:  </Card.Header>
                            <Card.Body>
                            <Card.Text>
                            {this.props.player.name} : {this.props.player.score}
                            </Card.Text>
                            </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <ImageCard imageCards={this.props.game.imageCards}/>
                    <div className="button-row">
                        <Button type='submit' variant='outline-light' className="button-submit-card">Submit Card</Button>
                    </div>
                    </Col>
                    <Col>
                        <Card border="info board-margin" style={{ width: '20rem' }}>
                        <Card.Header> Live Chat:  </Card.Header>
                        <Card.Body>
                                <Card.Text>
                                    <Chat/>
                                </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
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