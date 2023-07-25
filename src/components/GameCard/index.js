import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDeletePlayedGameConfirmationModalOpen } from '../../features/deletePlayedGameConfirmationModalOpen/deletePlayedGameConfirmationModalOpenSlice';
import { setPlayedGameRatingModalOpen } from '../../features/playedGameRatingModalOpen/playedGameRatingModalOpenSlice';
import { setGameForPlayedGameRatingModal } from '../../features/gameForPlayedGameRatingModal/gameForPlayedGameRatingModalSlice';
import { setWantToPlayGames } from '../../features/wantToPlayGames/wantToPlayGamesSlice';

function GameCard({
  game,
  openGameDetails }) {

  const dispatch = useDispatch();
  const wantToPlayGames = useSelector(state => state.wantToPlayGames.value);
  const playedGames = useSelector(state => state.playedGames.value);

  const addGameToWantToPlay = (event) => {
    let copy = JSON.parse(JSON.stringify(wantToPlayGames));
    copy[game.slug] = game;
    dispatch(setWantToPlayGames(copy));
    localStorage.setItem('want_to_play_games', JSON.stringify(copy));
    event.stopPropagation();
  };

  const removeGameFromWantToPlay = (event) => {
    let copy = JSON.parse(JSON.stringify(wantToPlayGames));
    delete copy[game.slug];
    dispatch(setWantToPlayGames(copy));
    localStorage.setItem('want_to_play_games', JSON.stringify(copy));
    event.stopPropagation();
  };

  const openDeletePlayedGameConfirmationModal = (event) => {
    dispatch(setGameForPlayedGameRatingModal(game));
    dispatch(setDeletePlayedGameConfirmationModalOpen(true));
    event.stopPropagation();
  };

  const openPlayedGameRatingModal = (event) => {
    dispatch(setGameForPlayedGameRatingModal(game));
    dispatch(setPlayedGameRatingModalOpen(true));
    event.stopPropagation();
  };

  return (
    <div className="GameCard" onClick={() => openGameDetails(game.slug)}>
      <img className="GameCardImage" alt="" src={game.background_image} />
      {game.metacritic ? (<h3 className="GameCardRating">{game.metacritic}</h3>): ('')}
      {game.own_rating !== undefined ? (<h3 className={game.own_rating === 100 ? "GameCardOwnRating-100" : "GameCardOwnRating"}>{game.own_rating}</h3>): ('')}
      {game.playtime ? (<><h3 className="GameCardPlayTime">{game.playtime}</h3><h4 className='GameCardPlayTimeHours'>HOURS</h4></>): ('')}
      <h2 className="GameCardTitle">{game.name}</h2>
      {wantToPlayGames[game.slug]
      ? <MinusCircleOutlined className="GameCardWantToPlayIconSaved" onClick={removeGameFromWantToPlay} /> 
      : <PlusCircleOutlined className="GameCardWantToPlayIcon" onClick={addGameToWantToPlay} />}
      {playedGames[game.slug]
      ? <CloseCircleOutlined className="GameCardPlayedIconSaved" onClick={openDeletePlayedGameConfirmationModal} />
      : <CheckCircleOutlined className="GameCardPlayedIcon" onClick={openPlayedGameRatingModal} />}
    </div>
  );
}

export { GameCard };