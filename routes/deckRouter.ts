import express from "express";
import {
  createNewDeck,
  getDeck,
  getDecks,
} from "../controllers/cardController.js";
const router = express.Router();

router.get("/:deckId", getDeck);
router.get("/", getDecks);
router.post("/", createNewDeck);

export default router;
