const router = require('express').Router();
const Player  = require('../db/models/player');

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
router.post('/', async(req, res, next) => {
    console.log("router", req.body)
    try {
        const {name, score} = req.body

        const alreadyExisting = await Player.findOne({
            name: name,
            score: score
        })
        if(alreadyExisting){
            res.json(alreadyExisting)
        }else{
            const newPlayer = new Player({
                name: name,
                score: score
            })
            console.log("this is player", newPlayer)
            await newPlayer.save()
        } 
    } catch (error) {
        next(error) 
    }
})


module.exports = router;