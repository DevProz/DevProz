const db = require('../server/db')
const {SentenceCard} = require("../server/db/models/sentenceCard");
const {buildManyCards} = require('../seed/methods');


const cardSeed = async() => {
    try {
      await mongoose.connect("mongodb://localhost:27017/devproz", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });
      console.log(chalk.green('Connected cardSeed'))
    } catch (error) {
      console.error(error.message)
    }
  }; 
  cardSeed();


const runSeed = async() => {
    try {
        const manyCards = buildManyCards(110)
        await Promise.all(
manyCards.map(sentenceCard => SentenceCard.create(sentenceCard))
        )
            console.log(`seeded ${seedCards.length} cards`)
    }
    catch (error) {
      console.error(chalk.red('ERROR HANDLED', error.message))
    }
  };
  
  runSeed()

  







