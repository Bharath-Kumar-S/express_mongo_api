export type Deck = {
  deckId: String;
  remaining: Number;
  type: String;
  shuffled: Boolean;
};

export type DeckCardEnum = {
  value: String;
  suit: String;
  code: String;
}[];

export type CardEnum = {
  value: String;
  suit: String;
  code: String;
};
