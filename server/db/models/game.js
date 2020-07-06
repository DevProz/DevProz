const { Schema, model, Types } = require("mongoose");

// const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    player: 
      {
        type: String,
        ref: "Player",
      },
    imageCard: 
      {
        type: String,
        ref: "ImageCard",
      },
    sentenceCard:
      {
        type: String,
        ref: "SentenceCard",
      },
    entranceCode: {
      type: String,
      //required: true,
      unique: true,
      minlength: 4,
      maxlength: 4,
    },
  },
  { timestamps: true }
);
// const Game = mongoose.model("Game", gameSchema)
module.exports = model("Game", gameSchema);