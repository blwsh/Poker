import React from 'react';
import { Player, Card } from './types';
import {Players, Board} from './components'
import Deck from './classes/Deck';
import {TexasHoldem} from 'poker-odds-calc';
import { IHand } from 'poker-odds-calc/dts/lib/Interfaces';

const oddsCalculator = new TexasHoldem();

const blindLevels = [
  [25, 50],
  [50, 100],
  [100, 200],
  [150, 300],
  [200, 400],
  [],
  [300, 600],
  [400, 800],
  [500, 1000],
  [800, 1600],
  [1000, 2000],
  [],
  [1500, 3000],
  [2000, 4000],
  [2500, 5000],
];

// Create a deck and shuffle it.
const deck = (new Deck()).shuffle();

// Add players to the game
const pList: Player[] = ['Ben', 'Steve', 'Bev', 'Finley', 'Dylan'].map((name, key) => {
  const playerHand = [deck.take(), deck.take()]

  const player = {
    id: key.toString(),
    name,
    inGame: Math.random() >= .1,
    dealt: Math.random() >= .2,
    allIn: Math.random() >= .8,
    hasCalled: Math.random() >= .2,
    isButton: Math.random() >= .7,
    isSmallBlind: Math.random() >= .7,
    isBigBlind: Math.random() >= .8,
    folded: Math.random() >= .8,
    hand: playerHand,
    stack: {"25": 0, "100": 0, "500": 0, "1000": 0, "5000": 1, total: Math.floor(Math.random() * 2000000)}
  }

  console.log(
    oddsCalculator.addPlayer(playerHand.map(card => card.string[0].toUpperCase() + card.string.slice(1).toLowerCase()) as IHand)
  )

  return player;
})

// Draw the cards
const burnCards: Card[] = [];
const communityCards: Card[] = [];

// The flop
burnCards.push(deck.take())
communityCards.push(deck.take())
communityCards.push(deck.take())
communityCards.push(deck.take())

// The turn
// burnCards.push(deck.take())
// communityCards.push(deck.take())

// // The river
// burnCards.push(deck.take())
// communityCards.push(deck.take())

// Calculate odds
oddsCalculator.setBoard(communityCards.map(card => card.string[0].toUpperCase() + card.string.slice(1).toLowerCase()) as IHand)
oddsCalculator.setDeadCards(burnCards.map(card => card.string[0].toUpperCase() + card.string.slice(1).toLowerCase()) as IHand)


const Result = oddsCalculator.calculate();

Result.getPlayers().forEach(player => console.log(player));

function App() {
  return (
    <div className="App">
      <ul className="blind-levels">
        {blindLevels.map(level => <li>{level.length ? level.join('/') : 'Break'}</li>)}
      </ul>
      <Board communityCards={communityCards} burnCards={burnCards}/>
      <Players players={pList}/>
    </div>
  );
}

export default App;
