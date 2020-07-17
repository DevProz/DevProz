const sentenceCards = require("./sentenceCards");
const imageCards = require("./imageCards");

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

function buildManyCards() {
  let cards = [];
  for (let i = 0; i < sentenceCards.length; i++) {
    cards.push(buildSentence(sentenceCards[i]));
  }
  return cards;
}

function buildManyMemes() {
  let memes = [];
  for (let i = 0; i < imageCards.length; i++) {
    memes.push(buildMeme(imageCards[i]));
  }
  return memes;
}

module.exports = {
  buildManyCards,
  buildManyMemes,
};
