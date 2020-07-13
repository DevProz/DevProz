import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import MySentenceCards from "./MySentenceCards";
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import Chat from "./Chat";
import Timer from './Timer';
import SelectedCards from './SelectedCards'

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
                    <Col>
                    <ImageCard imageCards={this.props.game.imageCards}/>
                    {(this.props.game.selectedCards.length > 0) ? <SelectedCards selectedCards={this.props.game.selectedCards}/> : console.log('there are no selected cards')}
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
        player: state.player,

    }
}


export default connect(mapState)(Game)