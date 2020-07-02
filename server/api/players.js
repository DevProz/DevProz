const router = require('express').Router();
const { Player } = require('../db/models/player');
const { Db } = require('mongodb');

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
            await newPlayer.save()
        } 
    } catch (error) {
        next(error) 
    }
})





module.exports = router;