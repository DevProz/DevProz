const sentenceCards = require("./sentenceCards");
const imageCard = require("./imageCards");

function buildSentence(sentenceCard) {
  return {
    sentence: sentenceCard.sentence,
  };
}

function buildMeme(imageCard) {
  return {
    image: imageCard.image
  };
}
function randomSentence(sentence) {
  let thisSentence = sentence[Math.floor(Math.random() * sentence.length)];
  return thisSentence;
}

function randomMeme(image) {
  let thisMeme = image[Math.floor(Math.random() * image.length)];
  return thisMeme;
}

function buildManyCards(numOfCards) {
  let cards = [];
  for (let i = 0; i < numOfCards; i++) {
    cards.push(buildSentence(randomSentence(sentenceCards)));
  }
  return cards;
}

function buildManyMemes(numOfMemes) {
  let memes = [];
  for (let i = 0; i < numOfMemes; i++) {
    memes.push(buildMeme(randomMeme(imageCard)));
  }
  return memes;
}

module.exports = {
  buildManyCards,
  buildManyMemes,
};
