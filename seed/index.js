const mongoose = require('mongoose');
const Game = require('../server/db/models/game');

// const uri = process.env.NODE_ENV === "development" ? "mongodb://localhost:27017/devproz" : process.env.DB_SECRET;

(async () => {
  try {
    await mongoose.connect("mongodb+srv://marybelousova:Iamsohappy@cluster0.3nd7f.mongodb.net/devproz?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to seed')
  } catch (error) {
    console.error(error.message)
  }
})()


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

( async () => {
  try {
    await Game.create(games, () => {
      console.log('Data have been seeded succesfully')
    });
  }
  catch (error) {
    console.error('ERROR HANDLED', error.message)
  }
  })();
