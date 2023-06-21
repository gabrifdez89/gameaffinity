import React from 'react';
import './index.css';

function GameCard(props) {
  return (
    <div className="GameCard">
        <img className="GameCardImage" alt="" src={props.background_image}/>
        {props.metacritic ? (<h3 className="GameCardRating">{props.metacritic}</h3>): ('')}
        <h2 className="GameCardTitle">{props.name}</h2>
    </div>
  );
}

export { GameCard };