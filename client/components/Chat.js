import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import socket from "../socket";  

class Chat extends React.Component {
    constructor(){
        super()
        this.state = {
            message: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            message: event.target.value,
        });
    }

    handleSubmit(event){
        event.preventDefault()
        socket.emit("send-message", {message: event.target.message.value, playerId: this.props.player._id, code: this.props.game.entranceCode});
        this.setState({
            message: ""
        })
    }
      
    render() {
        return (
            <div className="chat-box">
                <div className="row chat-style-text">
                        <div className="chat-box">
                                <div className="messages">
                                    {this.props.messages.map(el => {
                                        return (
                                            <div className="chat-one-message">
                                                <div className="name-chat">{el.playerName}: </div>
                                                <div className="text-chat">{el.message}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            <form className="form-chat" onSubmit={this.handleSubmit}>
                                <input 
                                type="text"  
                                id="message"
                                className="type-message-input"
                                size="sm" 
                                placeholder="Type your message..."
                                onChange={this.handleChange} 
                                name="message" 
                                    value={this.state.message}
                                />
                                <Button type="submit" variant="outline-secondary" className="btn chat-button form-control">Send</Button>
                            </form>
                        </div>
                </div>
            </div>
            
            );
        }
    }

const mapState = (state) => {
    return {
        game: state.game,
        player: state.player,
        messages: state.messages
    }
}

export default connect(mapState)(Chat);