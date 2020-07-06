const router = require('express').Router();
const Game  = require('../db/models/game');

router.post('/', async(req, res, next) => {
    try {
        const {player, imageCard, sentenceCard, entranceCode} = req.body
        const newGame = new Game({
            player: player,
            imageCard: imageCard,
            sentenceCard: sentenceCard,
            entranceCode: entranceCode
        })
        console.log('this is the newGame', newGame)
        await newGame.save()
        res.json(newGame)
        
    } catch (error) {
        next(error)
    }
})



module.exports = router;