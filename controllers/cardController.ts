import Deck from "../models/Deck.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { deck as DECK, shuffledDeck } from "../data.js";
import { v4 as uuid } from "uuid";

// @desc Create new deck
// @route POST /deck
// @access Private
const createNewDeck = async (req: Request, res: Response) => {
  const { type, shuffled } = req.body;

  // Data validation
  if (type === undefined || shuffled === undefined)
    return res.status(400).json({ message: "All fields are required" });

  let cards = shuffled ? shuffledDeck() : DECK;

  if (type === "SHORT") {
    cards = cards.filter((card) => {
      if (!(+card.value >= 2 && +card.value <= 6)) return card;
    });
  }

  //deck object
  const deck = await Deck.create({
    deckId: uuid(),
    type,
    shuffled,
    remaining: cards.length,
    cards,
  });
  deck
    ? res.status(201).json({
        deckId: deck.deckId,
        type,
        shuffled,
        remaining: deck.remaining,
      })
    : res.status(400).json({ message: "Invalid deck data received" });
};

const getDeck = async (req: Request, res: Response) => {
  const { deckId } = req.params;
  const deck = await Deck.findOne({ deckId: deckId }).select(
    "deckId remaining shuffled type cards -_id"
  );
  return res.status(200).json(deck);
};

const getDecks = async (req: Request, res: Response) => {
  const decks = await Deck.find()
    .select("deckId remaining shuffled type -_id")
    .lean();
  return res.status(200).json(decks);
};

export { createNewDeck, getDeck, getDecks };
