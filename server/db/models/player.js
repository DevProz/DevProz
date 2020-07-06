const { Schema, model, Types } = require("mongoose");

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

module.exports = model("Player", playerSchema)

