import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import './index.css';

function GameCard({
  game,
  openGameDetails,
  wantToPlayGamesSlugs,
  setWantToPlayGamesSlugs }) {
  /* const addGameToWantToPlay = function() {
    let copy = wantToPlayGamesSlugs;
    copy.push(game.slug);
    setWantToPlayGamesSlugs(copy);
    localStorage.setItem('want_to_play_games_slugs', JSON.stringify(copy));
  };

  const removeGameFromWantToPlay = function() {
    let copy = wantToPlayGamesSlugs;
    copy.splice(copy.indexOf(game.slug), 1);
    setWantToPlayGamesSlugs(copy);
    localStorage.setItem('want_to_play_games_slugs', JSON.stringify(copy));
  }; */

  return (
    <div className="GameCard" onClick={() => openGameDetails(game.slug)}>
        <img className="GameCardImage" alt="" src={game.background_image}/>
        {game.metacritic ? (<h3 className="GameCardRating">{game.metacritic}</h3>): ('')}
        <h2 className="GameCardTitle">{game.name}</h2>
        {wantToPlayGamesSlugs.includes(game.slug)
        ? <MinusCircleOutlined className="GameCardWantToPlayIconSaved" /* onClick={removeGameFromWantToPlay} *//> 
        : <PlusCircleOutlined className="GameCardWantToPlayIcon" /* onClick={addGameToWantToPlay} *//>}
    </div>
  );
}

export { GameCard };