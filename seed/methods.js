const { sentenceCards } = require("./sentenceCards");
// choose random image card function 

function buildCard(sentence) {
  return {
    sentence,
  };
}

function randomSentence(sentence) {
  let sentence = sentence[Math.floor(Math.random() * firstName.length)];
  return sentence;
}

function buildManyCards(numOfCards) {
  console.log('sentence card', sentenceCards)
  let cards = [];
  for (let i = 0; i < numOfCards; i++) {
    cards.push(buildCard(randomSentence(sentenceCards)));
  }
  return cards
}

module.exports = {
    buildManyCards
}
