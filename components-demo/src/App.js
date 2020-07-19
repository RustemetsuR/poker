import React, { Component } from 'react';
import './App.css';
import './assets/cards.css';
import './Cards/Cards';
import Cards from './Cards/Cards';

class App extends Component {
  state = {
    cards: [
      {
        suit: null,
        rank: null
      },
      {
        suit: null,
        rank: null
      },
      {
        suit: null,
        rank: null
      },
      {
        suit: null,
        rank: null
      },
      {
        suit: null,
        rank: null
      }
    ]
  }
  constructor() {
    super();
    this.cardDeck = [];
    this.suits = ["♠", "♣", "♥", "♦"];
    this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", 'J', 'Q', 'K', 'A'];
    this.numberOfAttempts = 0;
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.cardDeck.push({
          "rank": this.ranks[j],
          "suit": this.suits[i]
        });
      }
    }
  };

  getRandom = () => {
    for (let i = 0; i < 5; i++) {
      let num = this.state.cards[i];
      let random = Math.floor(Math.random() * this.cardDeck.length);
      num.rank = this.cardDeck[random].rank;
      num.suit = this.cardDeck[random].suit;
      this.cardDeck.splice(random, 1);
      this.setState({ num });
    }
  }

  getCards = () => {
    if (this.numberOfAttempts === 10) {
      this.restart();
      this.numberOfAttempts = 1;
      this.getRandom();
      this.checkForCombo();
    } else {
      this.numberOfAttempts += 1;
      this.getRandom();
      this.checkForCombo();
    }
  }

  checkForCombo = () => {
    
    let message = document.getElementById('message');
    message.innerHTML = '';
    this.checkLoop(0, 1);
    this.checkLoop(1, 2);
    this.checkLoop(2, 3);
    this.checkLoop(3, 4);
  }

  checkLoop = (card, compareCard) => {
    let message = document.getElementById('message');
    for (let i = compareCard; i < 5; i++) {
      if (this.state.cards[card].rank === this.state.cards[i].rank) {
          message.innerHTML = "Пара";
      }
    }
    if(this.state.cards[0].suit === this.state.cards[1].suit && 
      this.state.cards[1].suit === this.state.cards[2].suit && 
      this.state.cards[2].suit === this.state.cards[3].suit &&
      this.state.cards[3].suit=== this.state.cards[4].suit){
      message.innerHTML = "Флэш";
    }
  }

  restart = () => {
    this.cardDeck = [];
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.cardDeck.push({
          "rank": this.ranks[j],
          "suit": this.suits[i]
        });
      }
    }
  }

  addClass = num =>{
    let rank = this.state.cards[num].rank;
    if(this.state.cards[num].suit === '♠'){
      return 'card spades rank-' + rank.toLowerCase();
    }
    if(this.state.cards[num].suit === '♣'){
      return 'card clubs rank-' + rank.toLowerCase();
    }
    if(this.state.cards[num].suit === '♥'){
      return 'card hearts rank-' + rank.toLowerCase();
    }
    if(this.state.cards[num].suit === '♦'){
      return 'card diams rank-' + rank.toLowerCase();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <button onClick={this.getCards}></button>
          <ul className="playingCards faceImages">
            <Cards suit={this.state.cards[0].suit} rank={this.state.cards[0].rank} classes={this.addClass(0)}/>
            <Cards suit={this.state.cards[1].suit} rank={this.state.cards[1].rank} classes={this.addClass(1)}/>
            <Cards suit={this.state.cards[2].suit} rank={this.state.cards[2].rank} classes={this.addClass(2)}/>
            <Cards suit={this.state.cards[3].suit} rank={this.state.cards[3].rank} classes={this.addClass(3)}/>
            <Cards suit={this.state.cards[4].suit} rank={this.state.cards[4].rank} classes={this.addClass(4)}/>
          </ul>
          <h3 id="message"></h3>
        </div>
      </div>
    );
  }

}

export default App;
