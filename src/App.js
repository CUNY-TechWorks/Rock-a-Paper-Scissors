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

  render() {
    return (
      <div className="style">  
         <div>
           <PlayerCard />
           <PlayerCard />
         </div>
         <div className="winner"> Place the winner here </div>
         <button type="button"> Play the Game </button>
      </div>
    );
  }
}

export default Game;