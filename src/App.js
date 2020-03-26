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

  pickCard = cardIndex => {
    if (!!this.state.deck[cardIndex].isFlipped) {
      return;
    }
    const cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex == index) {
        return cardToFlip;
      }
      return card;
    });
    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      if (newDeck[card1Index].symbol != newDeck[card2Index].symbol) {
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
      }
      newPickedCards = [];
    }
    this.setState({ deck: newDeck, pickedCards: newPickedCards });
  };

  unflipCards = (card1Index, card2Index) => {
    let card1 = { ...this.state.deck[card1Index] };
    let card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;
    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      }
      if (card2Index === index) {
        return card2;
      }
      console.log(card);
      return card;
    });
    this.setState({
      deck: newDeck
    });
  };

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          key={index}
          pickCard={this.pickCard.bind(this, index)}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3 className="Subtitle">Match Cards to Win</h3>
        </header>
        <div>{cardsJSX.slice(0, 4)}</div>
        <div>{cardsJSX.slice(4, 8)}</div>
        <div>{cardsJSX.slice(8, 12)}</div>
        <div>{cardsJSX.slice(12, 16)}</div>
      </div>
    );
  }
}

export default App;
