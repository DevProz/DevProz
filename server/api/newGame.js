const router = require('express').Router();
const Game  = require('../db/models/game');
const Player = require('../db/models/player');

async function checkPlayer(req, res, next) {
    if (!req.session.player) {
        req.session.player = new Player();
        await req.session.player.save();
    }
    next();
}


router.post('/', checkPlayer, async(req, res, next) => {
 
    try {
        const player = await Player.findOne({_id: req.session.player._id})
        const code = Math.random().toString(36).substring(2, 6).toUpperCase();
        const newGame = new Game({
            players: [player],
            imageCards: [],
            sentenceCards: [],
            entranceCode: code
        })
        console.log('this is the newGame', newGame)
        await newGame.save()
        Game.findOne({_id: newGame._id}).populate("players").then(populatedGame => res.json(populatedGame))
        
    } catch (error) {
        next(error)
    }
})



module.exports = router;