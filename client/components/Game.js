import React from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import MySentenceCards from "./MySentenceCards";
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import Chat from "./Chat";
import SelectedCards from './SelectedCards';
import socket from '../socket';

class Game extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRestartSubmit = this.handleRestartSubmit.bind(this);
    } 

    handleSubmit(event) {
            event.preventDefault();
            socket.emit("leave-game", {code: this.props.game.entranceCode, playerId: this.props.player._id});
    }
  
   handleRestartSubmit(event) {
        event.preventDefault();
        socket.emit("start_game", { playerId: this.props.player._id, code: this.props.game.entranceCode});
    }
   

      render() {
        return (
            <div>
                <div>
                <div className="title-game-page">
                <p className="what-color">WHAT</p>
                <p className="do-color">DO </p>
                <p className="you-color">YOU </p>
                <p className="meme-color">MEME</p>
                <p className="question-mark-color">?</p>
                </div>
                <Button type='submit' onClick ={this.handleSubmit} variant='outline-light' className="button-leave-game">Leave the game</Button>
                <Button type='button' onClick ={this.handleRestartSubmit} variant='outline-light' className="button-leave-game">Restart the game</Button>
                    <Row>
                        <Col>
                        <Card border="info board-margin" style={{ width: '10rem' }}>
                            <Card.Header className="countdown-style">
                                Countdown: {this.props.countdown}
                            </Card.Header>
                        </Card>
                        <Card  border="info" style={{ width: '10rem' }}>
                            <Card.Header> Score:  </Card.Header>
                                <Card.Body>
                                <Card.Text>
                                {this.props.game.players.map((player) => {
                                    return (
                                        <table className="table">
                                        <tr className="score-board">
                                            <td className="score-board-name">{player.name}:</td>
                                            <td className="score-board-score">{player.score}</td>
                                        </tr>
                                        </table>
                                    )
                                })}
                                </Card.Text>
                                </Card.Body>
                        </Card>
                        </Col>
                        <Col className="image-column">
                        <ImageCard currentImage={this.props.game.currentImage}/>
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
                    <Row className="selectedCards-Row">
                        {(this.props.game.selectedCards.length > 0) ? <SelectedCards selectedCards={this.props.game.selectedCards}/> : console.log('there are no selected cards')}
                    </Row>
                    <MySentenceCards sentenceCards={this.props.game.sentenceCards}/>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        game: state.game,
        player: state.player,
        countdown: state.countdown,
    }
}

export default connect(mapState)(Game)



