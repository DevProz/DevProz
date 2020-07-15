const router = require("express").Router();
const Player = require("../db/models/player");

async function checkPlayer(req, res, next) {
    if (!req.session.player) {
        req.session.player = new Player();
        await req.session.player.save();
    }
    next();
}

router.get("/me", checkPlayer, async (req, res) => {
    const player = await Player.findOne({_id: req.session.player._id});
    res.json(player);
});

module.exports = router;