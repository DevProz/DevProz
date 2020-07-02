const router = require('express').Router();
const { ImageCard } = require('../db/models/imageCard');
const { SentenceCard } = require('../db/models/sentenceCard');


//get all imageCards
router.get("/imageCards", async (req, res, next) => {
    try {
        const imageCards = await ImageCard.find()
        res.json(imageCards)
    } catch (error) {
        next(error)
    }
});

//get all sentenceCards
router.get("/sentenceCards", async (req, res, next) => {
    try {
        const sentenceCard = await SentenceCard.find()
        res.json(sentenceCard)
    } catch (error) {
        next(error)
    }
});

module.exports = router;