const db = require('../server/db')
const SentenceCard = require("../server/db/models/sentenceCard");
const {buildManyCards} = require('../seed/methods');

async function seed() {
    await db.sync({force: true})
    console.log('db synced!')


const manyCards = buildManyCards(50)
// socket?
const seedCards = await Promise.all(
    manyCards.map(sentenceCard => SentenceCard.create(sentenceCard))
)
    console.log(`seeded ${seedCards.length} cards`)
} 

async function runSeed() {
    console.log('seeding...')
    try {
      await seed()
    } catch (err) {
      console.error(err)
      process.exitCode = 1
    } finally {
      console.log('closing db connection')
      await db.close()
      console.log('db connection closed')
    }
  }
  if (module === require.main) {
    runSeed()
  }
  module.exports = seed
  







