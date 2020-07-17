import React from "react";
import { Card, Row, Col, Button, Jumbotron } from "react-bootstrap";
import MySentenceCards from "./MySentenceCards";
import { connect } from "react-redux";
import ImageCard from "./ImageCard";
import Chat from "./Chat";
import SelectedCards from "./SelectedCards";
import socket from "../socket";
import { FaCrown } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { GiSandsOfTime } from "react-icons/gi";

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
                        <div className="game-code"><h5>Game Code: </h5><h5 className="code">{this.props.game.entranceCode}</h5></div>
                        <div className="buttons-align-left">
                        <Button type="submit" onClick ={this.handleSubmit} size="sm" variant="outline-light" className="button-leave-game">Leave the game</Button>
                        <Button type="button" onClick ={this.handleRestartSubmit} size="sm" variant="outline-light" className="button-leave-game">Restart the game</Button>
                        </div>
                    </div>
                    <div className="host-notification">
                        {(this.props.game.host === this.props.player._id) ? <div>Wait for players to select cards, then choose your favorite! <FaCrown /></div> : console.log('you arent the host')}
                    </div>
                    <div className="player">
                        {(this.props.game.host !== this.props.player._id) ? <div> Please submit a card! <FaCrown /></div> : console.log('you are the host')}
                    </div>

                        <Row className="shrink-row">
                            <Col style={{ width: "33%"}}>
                            <Card className="score">
                                <Card.Header className="countdown-style blinking">
                                <GiSandsOfTime /> HURRY UP: {this.props.countdown} 
                                </Card.Header>
                            </Card>
                            <Card  className="score">
                                <Card.Header className='score-header'> Score:  </Card.Header>
                                    <Card.Body className='score-body'>
                                    {this.props.game.players.map((player) => {
                                        return (
                                            <table className="table">
                                            <tr className="score-board">
                                                {(player._id == this.props.game.host) 
                                                ? <td className="score-board-name-2"><GiPodiumWinner size={20} color="yellow" /> {player.name} </td> 
                                                :  <td className="score-board-name">{player.name}</td>}
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
                    {(this.props.player._id !== this.props.game.host) ? <MySentenceCards sentenceCards={this.props.game.sentenceCards}/>: console.log("hi")}
                </div>
                <Row>
                {(this.props.player._id === this.props.game.host && this.props.game.status == "ALL_SELECTING") ? <div className="loader-back-two">
                        <div className="ex-container-two">
                            <div class="ex"></div>
                            <div class="ex"></div>
                            <div class="ex"></div>
                            <div class="ex"></div>
                            <div className="please-wait head2 text-center-two">
                                Waiting for players to submit cards...
                            </div>
                        </div>
                    </div>
                    : console.log("please submit")}
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



