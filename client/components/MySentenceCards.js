import React from "react";
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class MySentenceCards extends React.Component {

    render () {
        return (
            <div className="cards-row">
                {this.props.player.sentenceCards.map(card =>
                    <Card>
                        <Card.Body style={{width: "10rem"}}>
                                    {card.sentence}
                        </Card.Body>
                    </Card>
                )}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        game: state.game,
        player: state.player
    }
}


export default connect(mapState)(MySentenceCards);

