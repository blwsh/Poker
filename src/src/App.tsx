import React from 'react';
import { Player, Card } from './types';
import {Players, Board} from './components'
import Deck from './classes/Deck';

// Create a deck and shuffle it.
let deck = (new Deck).shuffle();

const pList: Player[] = [];

// Add players to the game
['Ben', 'Steve', 'Bev', 'Finley', 'Dylan'].forEach((name, key) => {
  pList.push({
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
    hand: [deck.take(), deck.take()], 
    stack: {"25": 0, "100": 0, "500": 0, "1000": 0, "5000": 1, total: Math.floor(Math.random() * 2000000)}
  })
})

// Draw the cards
const burnCards: Card[] = [];
const communityCards: Card[] = [];

burnCards.push(deck.take())
communityCards.push(deck.take())
communityCards.push(deck.take())
communityCards.push(deck.take())
burnCards.push(deck.take())
communityCards.push(deck.take())
burnCards.push(deck.take())
communityCards.push(deck.take())

function App() {
  return (
    <div className="App"> 
      <Board communityCards={communityCards} burnCards={burnCards}/>
      <Players players={pList}/>
    </div>
  );
}

export default App;
