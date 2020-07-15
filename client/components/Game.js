import React from "react";
import { Card, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import MySentenceCards from "./MySentenceCards";
import { connect } from "react-redux";
import ImageCard from "./ImageCard";
import Chat from "./Chat";
import SelectedCards from "./SelectedCards";
import socket from "../socket";

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
          console.log('WINNING PLAYER', winningPlayer)
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
                    </div>
                    <Button type='submit' onClick ={this.handleSubmit} variant='outline-light' className="button-leave-game">Leave the game</Button>
                    <Button type='button' onClick ={this.handleRestartSubmit} variant='outline-light' className="button-leave-game">Restart the game</Button>
                        <Row>
                            <Col>
                            <Card className='score'  style={{ width: '10rem' }}>
                                <Card.Header className="countdown-style">
                                    Countdown: {this.props.countdown}
                                </Card.Header>
                            </Card>
                            <Card  className='score' style={{ width: '10rem' }}>
                                <Card.Header> Score:  </Card.Header>
                                    <Card.Body>
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
                            <Col className="image-column">
                            <ImageCard currentImage={this.props.game.currentImage}/>
                            </Col>
                            <Col>
                                <Card className='score' style={{ width: '20rem' }}>
                                <Card.Header> Live Chat:  </Card.Header>

                                <Card.Body>
                                        <Card.Text className='chat-text'>
                                            <Chat/>
                                        </Card.Text>
                                </Card.Body>
                      
                            </Card>
                        </Col>
                    </Row>
                    <div className="host-notification">
                        {(this.props.game.host === this.props.player._id) ? <div> YOU ARE THE HOST! </div> : <div> Please submit a card </div>}
                    </div>
                    <Row className="selectedCards-Row">
                        {(this.props.game.selectedCards.length > 0) ? <SelectedCards selectedCards={this.props.game.selectedCards}/> : console.log('there are no selected cards')}
                    </Row>
                    <MySentenceCards sentenceCards={this.props.game.sentenceCards}/>
                </div>
                <Row className="selectedCardButton-Row">
                        {(this.props.game.host === this.props.player._id) && (this.props.game.selectedCards.length === this.props.game.players.length) ? <Button className="button-choose-winner" variant="outline-light" type='button' onClick={this.handleWinningSubmit}>Submit Winner Card</Button> : console.log('A winner has not been submitted yet')}
                    </Row>
                    <br/>
                 
            </div>
        )


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

          }else{
              return(
                  <Jumbotron className='jumbotron'>
                    <h1>Congratulations {winningPlayer.name}! You are the winner!</h1>
                    <Button className='button-winning-page' type='submit' onClick ={this.handleSubmit} variant='outline-light'>Leave the game</Button>
                    <Button className='button-winning-page' type='button' onClick ={this.handleRestartSubmit} variant='outline-light'>Restart the game</Button>
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



