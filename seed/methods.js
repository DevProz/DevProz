const sentenceCards = require("./sentenceCards");
const imageCard = require("./imageCards");

function buildSentence(sentence) {
  return {
    sentence,
  };
}

function buildMeme(imageUrl) {
  return {
    imageUrl,
  };
}
function randomSentence(sentence) {
  let thisSentence = sentence[Math.floor(Math.random() * sentence.length)];
  return thisSentence;
}

function randomMeme(imageUrl) {
  let thisMeme = imageUrl[Math.floor(Math.random() * imageUrl.length)];
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
