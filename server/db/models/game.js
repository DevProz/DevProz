const { Schema, model, Types } = require("mongoose");

const selectedCard = new Schema({
  sentenceCard: {
    type: Schema.Types.ObjectId,
    ref: "SentenceCard",
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: "Player",
  }
})


const gameSchema = new Schema({
    entranceCode: {
      type: String,
      // required: true,
      unique: true,
      minlength: 4,
      maxlength: 4,
    },
    players: 
      [{
        type: Schema.Types.ObjectId,
        ref: "Player",
      }],
    host: {
      type: Schema.Types.ObjectId,
      ref:'Player',
    },
    imageCards: 
      [{
        type: Schema.Types.ObjectId,
        ref: "ImageCard",
      }],
    sentenceCards:
      [{
        type: Schema.Types.ObjectId,
        ref: "SentenceCard",
      }],
    selectedCards: [selectedCard],
  },
  { timestamps: true }
);



module.exports = model("Game", gameSchema);