import React from "react";
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'


const MySentenceCards = (props) => {
    console.log('this is props from sentence cards', props)
      return (
        <div className="cards-row">
            {props.game.players.map(el => 
                <Card>
                  {el.sentenceCards.map((card) => { 
                      return <Card.Body style={{width: "10rem"}}>
                                {card.sentence}
                            </Card.Body>
                  })}
                  </Card>
            )}
        </div>
    )
}

const mapState = (state) => {
    return {
        game: state.game,
    }
}



export default connect(mapState)(MySentenceCards);

