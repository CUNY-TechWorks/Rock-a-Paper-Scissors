import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor() {
    super();

    this.signs = ["rock","scissors","paper"];
    this.state = {
       playerOne: "rock",
       playerTwo: "scissors",  
    }
  }

  playGameManually = () => {
    this.setState({
      playerTwo: this.signs[Math.floor(Math.random() * this.signs.length)],
    });
  }

  playGameRandomly = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * this.signs.length)],
      playerTwo: this.signs[Math.floor(Math.random() * this.signs.length)],
    });
  }
  
  decideWinner = () => {
     const playerOne = this.state.playerOne;
     const playerTwo = this.state.playerTwo

     if(playerOne === playerTwo) {
       return "It's a Tie!";
     }
     else if((playerOne === 'rock' && playerTwo === 'scissors') || (playerOne === 'paper' && playerTwo === 'rock') || (playerOne === 'scissors' && playerTwo === 'paper')) {
       return 'Player 1 wins!';
     }
     else {
       return 'Player 2 wins!';
     }
  }
  
  manuallySelect = e => { 
    this.setState({
      playerOne: e.innerText,
    });
  }
  
  // Purpose of onClick method is to run multiple functions on one click
  // In this case, when player one selects a sign, the game runs so that player 2
  // sign will change randomly to compete.
  onClick = e => {
    this.manuallySelect(e.target);
    this.playGameManually();
  }
  
  render() {
    return (
      <div className="style">  
         <div>
           <select size="4"> 
             <option> Player 1 select: </option> 
             <option onClick={this.onClick}> {this.signs[0]} </option>
             <option onClick={this.onClick}> {this.signs[1]} </option>
             <option onClick={this.onClick}> {this.signs[2]} </option>
           </select>
           <PlayerCard sign={this.state.playerOne}/>
           <PlayerCard sign={this.state.playerTwo}/> 
         </div>
         <div className="winner"> {this.decideWinner()} </div>
         <button type="button" onClick={this.playGameRandomly}> Play the Game </button>
      </div>
    );
  }
}

export default Game;