const router = require('express').Router();
const Player  = require('../db/models/player');
const SentenceCard = require('../db/models/sentenceCard');

async function checkPlayer(req, res, next) {
    if (!req.session.player) {
        req.session.player = new Player();
        await req.session.player.save();
    }
    next();
}

//get all players
router.get('/', async(req, res, next) => {
   try {
    const players = await Player.find()
    res.json(players)  
   } catch (error) {
       next(error)
   }
})

//checks if there's an existing player, if not create player
router.post('/', checkPlayer, async(req, res, next) => {
  
    try {
        // const sentenceCards = await SentenceCard.find()
        const newPlayer = new Player({
            name: req.body.name,
            score: req.body.score,
            // sentenceCards: sentenceCards
        })
    
        await newPlayer.save()
        Player.findOne({_id: newPlayer._id}).populate("sentenceCards").then(populatedSentenceCards => res.json(populatedSentenceCards))
    } catch (error) {
        next(error) 
    }
})


module.exports = router;