import React, { Component } from 'react';
import './App.css';
import './assets/cards.css'
import './Cards/Cards'
import Cards from './Cards/Cards';

class App extends Component {
  constructor() {
    super();
    this.cardDeck = [];
    this.suits = ["♦", "♣", "♥", "♦"];
    this.ranks = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    this.num = 0;
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.cardDeck.push({
          "rank": this.ranks[j],
          "suit": this.suits[i]
        });
      }
    }
    console.log(this.cardDeck)

    //   for(let i = 0; i <= this.ranks.length;i++){
    //     if(this.num == 4){
    //       break;
    //     }else{
    //       if(i == this.ranks.length){
    //         i = 0;
    //         this.cardDeck.push({
    //           "rank": this.ranks[i],
    //           "suit": this.suits[this.num]
    //         });
    //         this.num++;
    //     }else{
    //       this.cardDeck.push({
    //         "rank": this.ranks[i],
    //         "suit": this.suits[this.num]
    //       })
    //     }
    //     }
    // }
    // console.log(this.cardDeck);

  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="playingCards faceImages">
            <Cards rank={7} suit={"♦"} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
