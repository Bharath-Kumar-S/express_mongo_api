import mongoose from "mongoose";

const deckSchema = new mongoose.Schema(
  {
    deckId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["FULL", "SHORT"],
    },
    shuffled: {
      type: Boolean,
      required: true,
    },
    remaining: {
      type: Number,
      required: true,
    },
    cards: [
      {
        value: String,
        suit: String,
        code: String,
        _id: false,
      },
    ],
    drawnCards: [
      {
        value: String,
        suit: String,
        code: String,
        _id: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Deck", deckSchema);
