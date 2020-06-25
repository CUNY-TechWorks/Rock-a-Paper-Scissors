import React from 'react';

const scissors = "https://i.imgur.com/pgjyhIZ.png";
const paper = "https://i.imgur.com/2gsdqvR.png";
const rock = "https://i.imgur.com/LghSkIw.png"; 

const PlayerCard = (props) => {
  let image = "";

  if(props.sign === 'rock') {
     image = rock;
  }
  else if(props.sign === 'paper') {
     image = paper;
  }
  else {
     image = scissors;
  }

  return (
     <div className="player-card"> <img src={image}/> </div> 
  );
}

export default PlayerCard;