import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import "./App.css";

function generateDeck() {
  const symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`];
  let deck = [];

  for (let i = 0; i < 16; i++) {
    deck.push({
      symbol: symbols[i % 8],
      isFlipped: false
    });
  }
  return shuffle(deck);
}

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    };
  }
  render() {
    let cardsJSX = this.state.deck.map((card, index) => MemoryCard);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3 className="Subtitle">Match Cards to Win</h3>
        </header>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
