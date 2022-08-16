import mongoose from "mongoose";
import {v4 as uuid } from "uuid"

const deckSchema = new mongoose.Schema(
  {
    deckId: {
      type: String,
      required: true,
      default: uuid(),
    },
    type: {
      type: String,
      required: true,
      enum: ['FULL', 'SHORT']
    },
    shuffled: {
      type: Boolean,
      required: true,
    },
    remaining: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Deck", deckSchema);