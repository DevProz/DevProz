const router = require('express').Router();
const Player = require('../db/models/player');

async function checkPlayer(req, res, next) {
    if (!req.session.player) {
        req.session.player = new Player();
        await req.session.player.save();
    }
    next();
}

router.get('/', async (req, res, next) => {
    try {
        const players = await Player.find()
        res.json(players)
    } catch (error) {
        next(error)
    }
})

router.post('/', checkPlayer, async (req, res, next) => {
    try {
        const player = await Player.findOne({
            _id: req.session.player._id
        })
        player.name = req.body.name
        await player.save()
        Player.findOne({
            _id: player._id
        }).populate("sentenceCards").then(populatedSentenceCards => res.json(populatedSentenceCards))
    } catch (error) {
        next(error)
    }
})

module.exports = router;