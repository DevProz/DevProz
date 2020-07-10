import React from "react";
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'


const MySentenceCards = (props) => {
        console.log(props.player.sentenceCards)
      return (
        <div className="cards-row">
            {props.player.sentenceCards.map(card =>
                <Card>
                    <Card.Body style={{width: "10rem"}}>
                                {card.sentence}
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

const mapState = (state) => {
    return {
        game: state.game,
        player: state.player
    }
}



export default connect(mapState)(MySentenceCards);

