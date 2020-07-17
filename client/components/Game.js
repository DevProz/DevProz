import React from "react";
import { Card, Row, Col, Button, Jumbotron } from "react-bootstrap";
import MySentenceCards from "./MySentenceCards";
import { connect } from "react-redux";
import ImageCard from "./ImageCard";
import Chat from "./Chat";
import SelectedCards from "./SelectedCards";
import socket from "../socket";
import { FaCrown } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

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
          const players = this.props.game.players
          const winningPlayer = players.find(player => player.score === 5)
        
          if(winningPlayer === undefined){
            return (
                <div>
                    <div>
                    <div className="title-game-page">
                        <p className="what-color">WHAT</p>
                        <p className="do-color">DO </p>
                        <p className="you-color">YOU </p>
                        <p className="meme-color">MEME</p>
                        <p className="question-mark-color">?</p>
                        <div className='small-title'><p className='small-title-game'>WHAT DO YOU MEME?</p></div>
                        <div className="game-code"><h5>Game Code: </h5><h5 className="code">{this.props.game.entranceCode}</h5></div>
                        <div className="buttons-align-left">
                        <Button type="submit" onClick ={this.handleSubmit} size="sm" variant="outline-light" className="button-leave-game">Leave the game</Button>
                        <Button type="button" onClick ={this.handleRestartSubmit} size="sm" variant="outline-light" className="button-leave-game">Restart the game</Button>
                        </div>
                    </div>
                    <div className="host-notification">
                        {(this.props.game.host === this.props.player._id) ? <div>Wait for players to select cards, then choose your favorite! <FaCrown /></div> : <div> Please submit a card <GiReturnArrow /></div>}
                    </div>

                        <Row className="shrink-row">
                            <Col style={{ width: "33%"}}>
                            <Card className="score">
                                <Card.Header className="countdown-style">
                                    Countdown: {this.props.countdown}
                                </Card.Header>
                            </Card>
                            <Card  className="score">
                                <Card.Header className='score-header'> Score:  </Card.Header>
                                    <Card.Body className='score-body'>
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
                                    </Card.Body>
                            </Card>
                            </Col>
                            <Col className="image-column" style={{ width: "33%"}}>
                            <ImageCard currentImage={this.props.game.currentImage}/>
                            </Col>
                            

                            <Col style={{ width: "33%"}}>
                                <Card className="score">
                                <Card.Header> Live Chat:  </Card.Header>

                                <Card.Body>
                                        <Card.Text className="chat-text">
                                            <Chat/>
                                        </Card.Text>
                                </Card.Body>
                      
                            </Card>
                        </Col>
                    </Row>
                    <Row className="selectedCards-Row">
                        {(this.props.game.selectedCards.length > 0) ? <SelectedCards selectedCards={this.props.game.selectedCards}/> : console.log("there are no selected cards")}
                    </Row>
                    {(this.props.player._id !== this.props.game.host) ? <MySentenceCards sentenceCards={this.props.game.sentenceCards}/>: console.log("you are host")}
                </div>
                <Row className="selectedCardButton-Row">
                        {(this.props.game.host === this.props.player._id) && (this.props.game.selectedCards.length === this.props.game.players.length) ? <Button className="button-choose-winner" variant="outline-light" type="button" onClick={this.handleWinningSubmit}>Submit Winner Card</Button> : console.log("A winner has not been submitted yet")}
                </Row>
                <br/>
            </div>

          )} else {
              return(
                  <Jumbotron className="jumbotron">
                    <h1>Congratulations {winningPlayer.name}! You are the winner!</h1>
                    <Button className="button-winning-page" type="submit" onClick ={this.handleSubmit} variant="outline-light">Play Again</Button>
                  </Jumbotron>
              )
          }
        }  
    }

const mapState = (state) => {
    return {
        game: state.game,
        player: state.player,
        countdown: state.countdown,
    }
}

export default connect(mapState)(Game);



