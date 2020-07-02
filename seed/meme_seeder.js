// import mongoose from 'mongoose';
// import { Game } from '../server/db/models/game';

const mongoose = require('mongoose');
const {Game} = require('../server/db/models/game')

mongoose.connect('localhost:27017/devproz', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Game.find({})
//   .then(() => {
    // Game.create(
    //   {
    //     player: "Maria",
    //     imageCard:
    //       "https://i.pinimg.com/474x/9f/90/cb/9f90cbef900aab168e772429d9269646.jpg",
    //     sentenceCard: "Hi, this is a test",
    //     entranceCode: "GYRT",
    //   },
    //   {
    //     player: "Danielle",
    //     imageCard: "https://urlme.me/success/typed_a_url/made_a_meme.jpg",
    //     sentenceCard: "Test2",
    //     entranceCode: "HYRT",
    //   },
    //   {
    //     player: "Anna",
    //     imageCard: "https://memegenerator.net/img/instances/58481893.jpg",
    //     sentenceCard: "Hola!",
    //     entranceCode: "UORT",
    //   }
    // );
  // });

var games = [
  new Game({
    player: "Maria",
    imageCard:
      "https://i.pinimg.com/474x/9f/90/cb/9f90cbef900aab168e772429d9269646.jpg",
    sentenceCard: "Hi, this is a test",
    entranceCode: "GYRT",
  }),
  new Game({
    player: "Danielle",
    imageCard: "https://urlme.me/success/typed_a_url/made_a_meme.jpg",
    sentenceCard: "Test2",
    entranceCode: "HYRT",
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
  }),
].catch(function(){
  console.log('not good')
});


var done = 0;
for (let i = 0; i < games.length; i++) {
  games[i].save(function (err, result) {
    done++;
    if (done === games.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
