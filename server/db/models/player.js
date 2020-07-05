const { Schema, model, Types } = require("mongoose");

// const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    score: {
      type: Number,
      default: 0,
    },
    sentenceCards: [
      {
        type: Schema.Types.ObjectId,
        ref: "SentenceCard",
      },
    ],
  },
  { timestamps: true }
);
// const Player = mongoose.model("Player", playerSchema)
module.exports = model("Player", playerSchema)

