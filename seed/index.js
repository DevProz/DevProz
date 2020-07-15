const mongoose = require("mongoose");
const Game = require("../server/db/models/game");
const Player = require("../server/db/models/player");
const ImageCard = require("../server/db/models/imageCard");
const games = require("./games");
const players = require("./players");
const imageCard = require("./imageCards");
const chalk = require("chalk");
const SentenceCard = require("../server/db/models/sentenceCard");
const { buildManyCards, buildManyMemes } = require("../seed/methods");

require("dotenv").config();

const seed = async () => {
  try {
    const uri = process.env.NODE_ENV === "development" ? "mongodb://localhost:27017/devproz" : process.env.DB_SECRET;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.green("Connected to seed"));
  } catch (error) {
    console.error(error.message);
  }
};
seed();

const runSeed = async () => {
  try {
    await Game.create(games, () => {
      console.log(chalk.green("Game data have been seeded successfully"));
    });
    await Player.create(players, () => {
      console.log(chalk.green("Player data have been seeded successfully"));
    });
  } catch (error) {
    console.error(chalk.red("ERROR HANDLED", error.message));
  }
};
runSeed();

const runSeedCards = async () => {
  try {
    const manyCards = buildManyCards(400);
    const seedCards = await Promise.all(
      manyCards.map((sentenceCard) => SentenceCard.create(sentenceCard))
    );
    console.log(chalk.green(`seeded ${seedCards.length} sentence cards`));
  } catch (error) {
    console.error(chalk.red("ERROR HANDLED", error.message));
  }
};
runSeedCards();

const runMemeCards = async () => {
  try {
    const manyMemes = buildManyMemes(200);
    const seedMemes = await Promise.all(
      manyMemes.map((memeCard) => ImageCard.create(memeCard))
    );
    console.log(chalk.green(`seeded ${seedMemes.length} meme cards`));
  } catch (error) {
    console.error(chalk.red("ERROR HANDLED", error.message));
  }
};
runMemeCards();
