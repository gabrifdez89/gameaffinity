import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import './index.css';

function GameCard({
  game,
  openGameDetails,
  wantToPlayGames,
  setWantToPlayGames,
  playedGames,
  setPlayedGames,
  setIsPlayedGameRatingModalOpen,
  setGameForPlayedGameRatingModal }) {

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

  const removeGameFromPlayedGames = (event) => {
    let copy = JSON.parse(JSON.stringify(playedGames));
    delete copy[game.slug];
    setPlayedGames(copy);
    localStorage.setItem('played_games', JSON.stringify(copy));
    event.stopPropagation();
  };

  const openPlayedGameRatingModal = (event) => {
    setGameForPlayedGameRatingModal(game);
    setIsPlayedGameRatingModalOpen(true);
    event.stopPropagation();
  };

  return (
    <div className="GameCard" onClick={() => openGameDetails(game.slug)}>
      <img className="GameCardImage" alt="" src={game.background_image} />
      {game.metacritic ? (<h3 className="GameCardRating">{game.metacritic}</h3>): ('')}
      <h2 className="GameCardTitle">{game.name}</h2>
      {wantToPlayGames[game.slug]
      ? <MinusCircleOutlined className="GameCardWantToPlayIconSaved" onClick={removeGameFromWantToPlay} /> 
      : <PlusCircleOutlined className="GameCardWantToPlayIcon" onClick={addGameToWantToPlay} />}
      {playedGames[game.slug]
      ? <CloseCircleOutlined className="GameCardPlayedIconSaved" onClick={removeGameFromPlayedGames} />
      : <CheckCircleOutlined className="GameCardPlayedIcon" onClick={openPlayedGameRatingModal} />}
    </div>
  );
}

export { GameCard };