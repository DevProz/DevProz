import React from "react";
import { changeName } from "../store";
import { connect } from "react-redux";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
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
                name: ""
            })
            this.props.history.push('/join')
        }
      
      render() {
        console.log('Home Page')
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Your name:
                <input type="text"  name="title" onChange={this.handleChange}
                value={this.state.name}
                />
                
                </label>
                <button type="submit">Submit</button>
            </form>
            );
           }
        }

        const mapDispatchToProps = (dispatch) => {
            return {
                changeName:(playerName) => dispatch(changeName(playerName))
        }
    }
 
export default connect(null, mapDispatchToProps)(Home)
