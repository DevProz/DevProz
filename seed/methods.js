const sentenceCards = require('./sentenceCards');

function buildSentence(sentence) {
  return {
    sentence,
  };
}

function randomSentence(sentence) {
  let thisSentence = sentence[Math.floor(Math.random() * sentence.length)];
  return thisSentence;
}

function buildManyCards(numOfCards) {
  let cards = [];
  for (let i = 0; i < numOfCards; i++) {
    cards.push(buildSentence(randomSentence(sentenceCards)));
  }
  return cards;
}
module.exports = {
  buildManyCards
};
