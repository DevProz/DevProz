import React from "react";
import { changeName } from "../store";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { FaCrown } from "react-icons/fa";

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        redirect: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    handleChange(event) {
      this.setState({
        name: event.target.value,
      });
    }
      
    async handleSubmit(event) {
      event.preventDefault()
      this.props.changeName(this.state);
      this.setState({
          name: "",
          redirect: true
      })
    }
    
    render() {
      if (this.state.redirect) {
        return <Redirect to="/" />
      }

      return (
        <div className="wrap center">  
          <div className="title-front-page">
            <p className="what-color">WHAT</p>
            <p className="do-color">DO </p>
            <p className="you-color">YOU </p>
            <p className="meme-color">MEME</p>
            <p className="question-mark-color">?</p>
          </div>
          <form className="wrap-label" onSubmit={this.handleSubmit}>
              <label className="label-style" htmlFor="name">
              <div><FaCrown /></div>
              <div className="typewriter">Your name:</div>
              <input className="input-front-page" type="text"  id="name" name="title" onChange={this.handleChange}
              value={this.state.name}
              />
              </label>
              <Button disabled={this.state.name.length < 2} className="button-enter-name" variant="outline-light" type="submit">Submit</Button>
          </form>
        </div>
        )
      }
  }

const mapDispatchToProps = (dispatch) => {
  return {
      changeName:(playerName) => dispatch(changeName(playerName))
  }
}
 
export default connect(null, mapDispatchToProps)(Home);
