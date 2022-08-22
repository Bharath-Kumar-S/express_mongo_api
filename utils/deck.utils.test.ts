import { deck, shuffledDeck } from "./deck.utils.js";
import { DeckCardEnum, CardEnum } from "../types/decks.types.js";

describe("Shuffled deck unit test", () => {
  let shuffledDeckData1: DeckCardEnum, shuffledDeckData2: DeckCardEnum;

  beforeAll(() => {
    shuffledDeckData1 = shuffledDeck();
    shuffledDeckData2 = shuffledDeck();
  });

  test("Shuffled deck is returned on invoking shuffledDeck()", () => {
    expect(shuffledDeckData1).not.toEqual(deck);
  });

  test("Shuffled deck data is unique on invoking shuffledDeck()", () => {
    expect(shuffledDeckData1).not.toEqual(shuffledDeckData2);
  });

  test("Deck should return an array of cards", () => {
    expect(Array.isArray(deck)).toBe(true);
    expect(Array.isArray(shuffledDeckData1)).toBe(true);
  });

  test("Deck cards should be of the card type", () => {
    deck.forEach((card) => {
      expect(card).toMatchObject<CardEnum>({
        ...card,
      });
    });
  });
});
