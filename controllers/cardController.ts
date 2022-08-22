import Deck from "../models/Deck.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { deck as DECK, shuffledDeck } from "../utils/deck.utils.js";
import { v4 as uuid } from "uuid";

// @desc Create new deck
// @route POST /deck
// @access Private
const createNewDeck = async (req: Request, res: Response) => {
  const { type, shuffled } = req.body;

  // Data validation
  if (type === undefined || shuffled === undefined)
    return res.status(400).json({ message: "All fields are required" });

  if (typeof shuffled !== "boolean" || typeof type !== "string")
    return res.status(400).json({ message: "Payload schema does not match" });

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

// @desc Fetch Deck
// @route GET /deck/deckId
// @access Private
const getDeck = async (req: Request, res: Response) => {
  const { deckId } = req.params;
  const deck = await Deck.findOne({ deckId: deckId }).select(
    "deckId remaining shuffled type cards -_id"
  );
  deck
    ? res.status(200).json(deck)
    : res.status(400).json({ message: "Invalid deck id received" });
};

// @desc Get all decks
// @route GET /deck
// @access Private
const getDecks = async (req: Request, res: Response) => {
  const decks = await Deck.find()
    .select("deckId remaining shuffled type -_id")
    .lean();
  return res.status(200).json(decks);
};

// @desc Draw a card from deck
// @route GET deck/draw/?count=2
// @access Private
const drawCard = async (req: Request, res: Response) => {
  const deck = await Deck.findOne({ deckId: req.params.deckId });
  if (!deck) return res.status(400).json({ message: "deckId is not valid" });

  const { count } = req.query;

  if (typeof count !== "string") {
    return res.status(400).json({ message: "Invalid count received" });
  } else {
    const cardsCount: number = +count;
    const { cards } = deck;
    const drawnCards = cards.splice(0, cardsCount);

    //update deck
    deck.cards = cards;
    deck.remaining = cards.length;
    deck.drawnCards.push(...drawnCards);
    deck.save();

    return res.status(200).json({ cards: [...drawnCards] });
  }
};

export { createNewDeck, getDeck, getDecks, drawCard };
