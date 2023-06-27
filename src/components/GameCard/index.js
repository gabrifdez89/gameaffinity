import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import './index.css';

function GameCard({
  game,
  openGameDetails,
  wantToPlayGames,
  setWantToPlayGames }) {

  const addGameToWantToPlay = (event) => {
    let copy = JSON.parse(JSON.stringify(wantToPlayGames));
    copy[game.slug] = game;
    setWantToPlayGames(copy);
    localStorage.setItem('want_to_play_games', JSON.stringify(copy));
    event.stopPropagation();
  };

  const removeGameFromWantToPlay = (event) => {
    let copy = JSON.parse(JSON.stringify(wantToPlayGames));
    delete copy[game.slug];
    setWantToPlayGames(copy);
    localStorage.setItem('want_to_play_games', JSON.stringify(copy));
    event.stopPropagation();
  };

  return (
    <div className="GameCard" onClick={() => openGameDetails(game.slug)}>
      <img className="GameCardImage" alt="" src={game.background_image}/>
      {game.metacritic ? (<h3 className="GameCardRating">{game.metacritic}</h3>): ('')}
      <h2 className="GameCardTitle">{game.name}</h2>
      {wantToPlayGames[game.slug]
      ? <MinusCircleOutlined className="GameCardWantToPlayIconSaved" onClick={removeGameFromWantToPlay}/> 
      : <PlusCircleOutlined className="GameCardWantToPlayIcon" onClick={addGameToWantToPlay}/>}
    </div>
  );
}

export { GameCard };