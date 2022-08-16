import Deck from "../models/Deck.js";
import asyncHandler from "express-async-handler";
import {Request, Response} from "express";

// @desc Create new deck
// @route POST /deck
// @access Private
const createNewDeck = async (req: Request, res: Response) => {
  const { type, shuffled } = req.body;

  //Data validation
  if (!type || !shuffled )
    return res.status(400).json({ message: "All fields are required" });

  //deck object
  const deck = await Deck.create({ type, shuffled, remaining: type === 'FULL' ? 52 : 36 });
  deck
    ? res.status(201).json(deck)
    : res.status(400).json({ message: "Invalid deck data received" });
};

export {createNewDeck};