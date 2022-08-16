import express from "express";
import {createNewDeck} from "../controllers/cardController.js";
const router = express.Router();

router
  .route("/")
  .get()
  .post(createNewDeck)

export default router;
