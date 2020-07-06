import React from "react";
import { fetchPlayers } from "../store";
import { connect } from "react-redux";

class Home extends React.Component {

    componentDidMount(){
        this.props.getPlayers()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>
                    This is the home page:)
                </h1>
                <h3>
                    Players: 
                </h3>
                {this.props.players.map((player) => {
                    return <li>{player.name}</li>
                })}

            </div>
        )
    }
}


const mapState = (state) => {
    console.log('this is state', state)
    return {
        players: state.players
    }
}

const mapDispatch = (dispatch) => {
    return {
        getPlayers : () => dispatch(fetchPlayers())
    }
}


export default connect(mapState, mapDispatch)(Home)