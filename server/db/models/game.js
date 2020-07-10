const { Schema, model, Types } = require("mongoose");

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
styleCards
      selectedCards: {
        type: Array
      }
  },
  { timestamps: true }
);



module.exports = model("Game", gameSchema);