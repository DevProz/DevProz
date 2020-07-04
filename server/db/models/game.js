const { Schema, model, Types } = require("mongoose");

// const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    player: [
      {
        type: Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
    imageCard: [
      {
        type: Schema.Types.ObjectId,
        ref: "ImageCard",
      },
    ],
    sentenceCard: [
      {
        type: Schema.Types.ObjectId,
        ref: "SentenceCard",
      },
    ],
    entranceCode: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 4,
    },
  },
  { timestamps: true }
);
// const Game = mongoose.model("Game", gameSchema)
module.exports = model("Game", gameSchema);