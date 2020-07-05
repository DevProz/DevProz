const SentenceCard = require('../server/db/models/sentenceCard');

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

module.exports = sentenceCards;
