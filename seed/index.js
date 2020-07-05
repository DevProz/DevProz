const mongoose = require('mongoose');
const Game = require('../server/db/models/game');
const Player = require('../server/db/models/player');
const ImageCard = require('../server/db/models/imageCard');
const SentenceCard = require('../server/db/models/sentenceCard');
const chalk = require('chalk');
// const games  = require('./games')
// const imageCards = require('./imageCards')
// const players = require('./players')

const seed = async() => {
  try {
    await mongoose.connect("mongodb://localhost:27017/devproz", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.green('Connected to seed'))
  } catch (error) {
    console.error(error.message)
  }
}; 
seed();

  const games = [
    new Game({
    player: "Danielle",
    imageCard: "https://urlme.me/success/typed_a_url/made_a_meme.jpg",
    sentenceCard: "Test2",
    entranceCode: "HYRT",
  }),
    new Game({
        player: "Maria",
        imageCard:
        "https://i.pinimg.com/474x/9f/90/cb/9f90cbef900aab168e772429d9269646.jpg",
        sentenceCard: "Hi, this is a test",
        entranceCode: "GYRT",
    }),
    new Game({
      player: "Anna",
      imageCard: "https://memegenerator.net/img/instances/58481893.jpg",
      sentenceCard: "Hola!",
      entranceCode: "UORT",
    }),
    new Game({
      player: "Samantha",
      imageCard: "https://memegenerator.net/img/instances/40167808.jpg",
      sentenceCard: "Testing!",
      entranceCode: "GYLK",
    }),
    new Game({
      player: "Jen",
      imageCard:
        "https://3.bp.blogspot.com/-KznttM4xiDI/UvZY7V1JBEI/AAAAAAAAMio/ZU_H2J-MVFQ/s1600/teacher+meme+long+url+use+best+url+shortener.png",
      sentenceCard: "Last test!",
      entranceCode: "YDTF",
    })];

  const imageCards = [
    new ImageCard ({
      image: "https://urlme.me/success/typed_a_url/made_a_meme.jpg",
  }),
    new ImageCard({
      image: "https://i.pinimg.com/474x/9f/90/cb/9f90cbef900aab168e772429d9269646.jpg",
  }),
    new ImageCard({
      image: "https://memegenerator.net/img/instances/58481893.jpg",
  }),
    new ImageCard({
      image: "https://memegenerator.net/img/instances/40167808.jpg",
  }),
    new ImageCard({
      image: "https://3.bp.blogspot.com/-KznttM4xiDI/UvZY7V1JBEI/AAAAAAAAMio/ZU_H2J-MVFQ/s1600/teacher+meme+long+url+use+best+url+shortener.png",
  })];

  const players = [
    new Player({
        name: "Danielle",
        score: 4,
        sentenceCard: "Test2",
  }),
    new Player({
        name: "Maria",
        score: 2,
        sentenceCard: "Hi, this is a test",
    }),
    new Player({
        name: "Anna",
        score: 3,
        sentenceCard: "Hola!",
    }),
    new Player({
        name: "Samantha",
        score: 3,
        sentenceCard: "Testing!",
    }),
    new Player({
        name: "Jen",
        score: 4,
        sentenceCard: "Last test!",
    })];

    const sentenceCards = [
      new SentenceCard ({
      sentence: "Test1",
      }),
      new SentenceCard ({
      sentence: "Tes2",
      }),
      new SentenceCard ({
      sentence: "Test3",
      }),
      new SentenceCard ({
      sentence: "Test4",
      })]


const runSeed = async() => {
  try {
    await Game.create(games, () => {
      console.log(chalk.green('Game data have been seeded successfully'))
    });
    await Player.create(players, () => {
      console.log(chalk.green('Player data have been seeded successfully'))
    });
    await ImageCard.create(imageCards, () => {
      console.log(chalk.green('ImageCard data have been seeded successfully'))
    });
    await SentenceCard.create(sentenceCards, () => {
      console.log(chalk.green('SentenceCard data have been seeded successfully'))
    });
  }
  catch (error) {
    console.error(chalk.red('ERROR HANDLED', error.message))
  }
};
runSeed()
