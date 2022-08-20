import express from "express";
import {
  createNewDeck,
  drawCard,
  getDeck,
  getDecks,
} from "../controllers/cardController.js";
const router = express.Router();

router.get("/:deckId", getDeck);
router.get("/", getDecks);
router.post("/", createNewDeck);
router.post("/draw/:deckId", drawCard) 

export default router;
