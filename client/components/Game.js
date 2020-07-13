import React from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import MySentenceCards from "./MySentenceCards";
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import Chat from "./Chat";
import Timer from './Timer';
import SelectedCards from './SelectedCards'
import { updatePlayer } from "../store";
import socket from '../socket'
class Game extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRestartSubmit = this.handleRestartSubmit.bind(this);
        this.handleWinningSubmit = this.handleWinningSubmit.bind(this)
    } 
    handleWinningSubmit(){
        event.preventDefault();
        socket.emit("update-score",{
            playerId: this.props.player._id,
            code: this.props.game.entranceCode, 
        } )
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

        // const arrOfPlayers = this.props.game.players
        // let idx = 0
        // console.log('global index', idx)
        // const randomPlayer = arrOfPlayers[idx]
        // console.log('RANDOM PLAYER', randomPlayer)

        // function handleClick(){
        //     console.log('clicked!')
        //     if(idx === arrOfPlayers.length - 1){
        //         idx = 0
        //     }else{
        //         idx++
        //     }

        //     console.log('function index', idx)
        // }
        
        //selecting a random player attempt
        const arrOfPlayers = this.props.game.players
        const randomPlayer = arrOfPlayers[Math.floor(Math.random() * arrOfPlayers.length)];
        console.log('this is random player', randomPlayer._id)
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
                            <Card.Header className="countdown-style"> Countdown: <Timer/> </Card.Header>
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
                        <ImageCard imageCards={this.props.game.imageCards}/>
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

                    {(randomPlayer._id === this.props.player._id) && (this.props.game.selectedCards.length > 0) ? <Button className="button-choose-winner" variant="outline-light" type='button' onClick={this.handleWinningSubmit}>Submit Winner Card</Button> : console.log('A winner has not been submitted yet')}
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

    }
}


export default connect(mapState)(Game)

