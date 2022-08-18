type Deck = {
  value: String;
  suit: String;
  code: String;
}[];

export const deck: Deck = [
  {
    value: "ACE",
    suit: "SPADES",
    code: "AS",
  },
  {
    value: "2",
    suit: "SPADES",
    code: "2S",
  },
  {
    value: "3",
    suit: "SPADES",
    code: "3S",
  },
  {
    value: "4",
    suit: "SPADES",
    code: "4S",
  },
  {
    value: "5",
    suit: "SPADES",
    code: "5S",
  },
  {
    value: "6",
    suit: "SPADES",
    code: "6S",
  },
  {
    value: "7",
    suit: "SPADES",
    code: "7S",
  },
  {
    value: "8",
    suit: "SPADES",
    code: "8S",
  },
  {
    value: "9",
    suit: "SPADES",
    code: "9S",
  },
  {
    value: "10",
    suit: "SPADES",
    code: "10S",
  },
  {
    value: "KING",
    suit: "SPADES",
    code: "KS",
  },
  {
    value: "QUEEN",
    suit: "SPADES",
    code: "QS",
  },
  {
    value: "JOKER",
    suit: "SPADES",
    code: "JS",
  },
  {
    value: "ACE",
    suit: "HEARTS",
    code: "AH",
  },
  {
    value: "2",
    suit: "HEARTS",
    code: "2H",
  },
  {
    value: "3",
    suit: "HEARTS",
    code: "3H",
  },
  {
    value: "4",
    suit: "HEARTS",
    code: "4H",
  },
  {
    value: "5",
    suit: "HEARTS",
    code: "5H",
  },
  {
    value: "6",
    suit: "HEARTS",
    code: "6H",
  },
  {
    value: "7",
    suit: "HEARTS",
    code: "7H",
  },
  {
    value: "8",
    suit: "HEARTS",
    code: "8H",
  },
  {
    value: "9",
    suit: "HEARTS",
    code: "9H",
  },
  {
    value: "10",
    suit: "HEARTS",
    code: "10H",
  },
  {
    value: "KING",
    suit: "HEARTS",
    code: "KH",
  },
  {
    value: "QUEEN",
    suit: "HEARTS",
    code: "QH",
  },
  {
    value: "JOKER",
    suit: "HEARTS",
    code: "JH",
  },
  {
    value: "ACE",
    suit: "CLUBS",
    code: "AC",
  },
  {
    value: "2",
    suit: "CLUBS",
    code: "2C",
  },
  {
    value: "3",
    suit: "CLUBS",
    code: "3C",
  },
  {
    value: "4",
    suit: "CLUBS",
    code: "4C",
  },
  {
    value: "5",
    suit: "CLUBS",
    code: "5C",
  },
  {
    value: "6",
    suit: "CLUBS",
    code: "6C",
  },
  {
    value: "7",
    suit: "CLUBS",
    code: "7C",
  },
  {
    value: "8",
    suit: "CLUBS",
    code: "8C",
  },
  {
    value: "9",
    suit: "CLUBS",
    code: "9C",
  },
  {
    value: "10",
    suit: "CLUBS",
    code: "10C",
  },
  {
    value: "KING",
    suit: "CLUBS",
    code: "KC",
  },
  {
    value: "QUEEN",
    suit: "CLUBS",
    code: "QC",
  },
  {
    value: "JOKER",
    suit: "CLUBS",
    code: "JC",
  },
  {
    value: "ACE",
    suit: "DIAMONDS",
    code: "AD",
  },
  {
    value: "2",
    suit: "DIAMONDS",
    code: "2D",
  },
  {
    value: "3",
    suit: "DIAMONDS",
    code: "3D",
  },
  {
    value: "4",
    suit: "DIAMONDS",
    code: "4D",
  },
  {
    value: "5",
    suit: "DIAMONDS",
    code: "5D",
  },
  {
    value: "6",
    suit: "DIAMONDS",
    code: "6D",
  },
  {
    value: "7",
    suit: "DIAMONDS",
    code: "7D",
  },
  {
    value: "8",
    suit: "DIAMONDS",
    code: "8D",
  },
  {
    value: "9",
    suit: "DIAMONDS",
    code: "9D",
  },
  {
    value: "10",
    suit: "DIAMONDS",
    code: "10D",
  },
  {
    value: "KING",
    suit: "DIAMONDS",
    code: "KD",
  },
  {
    value: "QUEEN",
    suit: "DIAMONDS",
    code: "QD",
  },
  {
    value: "JOKER",
    suit: "DIAMONDS",
    code: "JD",
  },
];

export const shuffledDeck = () => [...deck].sort(() => Math.random() - 0.5); 