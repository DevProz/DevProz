const mongoose = require('mongoose');
const Game = require('../server/db/models/game');
const Player = require('../server/db/models/player');
const ImageCard = require('../server/db/models/imageCard');
const games = require('./games');
const players = require('./players');
const imageCards = require('./imageCards');
const sentenceCards = require('./sentenceCards');
const chalk = require('chalk');
// const db = require('../server/db')
const SentenceCard = require("../server/db/models/sentenceCard");
const {buildManyCards} = require('../seed/methods');



// const seed = async() => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/devproz", {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });
//     console.log(chalk.green('Connected to seed'))
//   } catch (error) {
//     console.error(error.message)
//   }
// }; 
// seed();

// const runSeed = async() => {
//   try {
//     await Game.create(games, () => {
//       console.log(chalk.green('Game data have been seeded successfully'))
//     });
//     await Player.create(players, () => {
//       console.log(chalk.green('Player data have been seeded successfully'))
//     });
//     await ImageCard.create(imageCards, () => {
//       console.log(chalk.green('ImageCard data have been seeded successfully'))
//     });
//     await SentenceCard.create(sentenceCards, () => {
//       console.log(chalk.green('SentenceCard data have been seeded successfully'))
//     });
    

    
//   }
//   catch (error) {
//     console.error(chalk.red('ERROR HANDLED', error.message))
//   }
// };
// runSeed()


const cardSeed = async() => {
  try {
    await mongoose.connect("mongodb://localhost:27017/devproz", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.green('Connected db'))
  } catch (error) {
    console.error(error.message)
  }
}; 
cardSeed();


const runSeed = async() => {
  try {
      const manyCards = buildManyCards(180)
      const seedCards = await Promise.all(
manyCards.map(sentenceCard => SentenceCard.create(sentenceCard))
      )
          console.log(`seeded ${seedCards.length} cards`)
  }
  catch (error) {
    console.error(chalk.red('ERROR HANDLED', error.message))
  }
};

runSeed()
