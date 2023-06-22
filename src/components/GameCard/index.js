import React from 'react';
import './index.css';

function GameCard({ game, openGameDetails }) {
  return (
    <div className="GameCard" onClick={() => openGameDetails(game.slug)}>
        <img className="GameCardImage" alt="" src={game.background_image}/>
        {game.metacritic ? (<h3 className="GameCardRating">{game.metacritic}</h3>): ('')}
        <h2 className="GameCardTitle">{game.name}</h2>
    </div>
  );
}

export { GameCard };