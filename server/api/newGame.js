const router = require('express').Router();
const Game  = require('../db/models/game');
const Player = require('../db/models/player');
const ImageCard = require('../db/models/imageCard')
const SentenceCard = require('../db/models/sentenceCard')

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
        const imageCards = await ImageCard.find()
        const sentenceCards = await SentenceCard.find()
        const code = Math.random().toString(36).substring(2, 6).toUpperCase();
        const newGame = new Game({
            players: [player],
            imageCards: imageCards,
            sentenceCards: sentenceCards,
            entranceCode: code
        })
        console.log(newGame)
      
        await newGame.save()
        Game.findOne({_id: newGame._id}).populate("players").populate("imageCards").populate("sentenceCards").then(populatedGame => res.json(populatedGame))
        
    } catch (error) {
        next(error)
    }
})



module.exports = router;