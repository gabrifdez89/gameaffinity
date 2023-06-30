import React, { useState } from 'react';
import { MainContainer } from '../MainContainer';
import { Header } from '../Header';
import { useFetchLatestGamesReleased } from '../../hooks/useFetchLatestGamesReleased';
import { useFetchSearchedGames } from '../../hooks/useFetchSearchedGames';
import { useFetchGameDetails } from '../../hooks/useFetchGameDetails';
import { GameDetailsModal } from '../GameDetailsModal';
import { useFetchGameDetailsScreenshots } from '../../hooks/useFetchGameDetailsScreenshots';
import { useFetchWantToPlayGames } from '../../hooks/useFetchWantToPlayGames';
import { useFetchPlayedGames } from '../../hooks/useFetchPlayedGames';
import { SearchBoard } from '../SearchBoard';
import { WantToPlayBoard } from '../WantToPlayBoard';
import { PlayedBoard } from '../PlayedBoard';
import { PlayedGameRatingModal } from '../PlayedGameRatingModal';
import { DeletePlayedGameConfirmationModal } from '../DeletePlayedGameConfirmationModal';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Topbar } from '../Topbar';
import { setModalOpen } from '../../features/modalOpen/modalOpenSlice';

function App() {
  const [latestGamesReleased, setLatestGamesReleased] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [gameDetailsSlug, setGameDetailsSlug] = useState('');
  const [gameDetails, setGameDetails] = useState();//3
  const [gameDetailsScreenshots, setGameDetailsScreenshots] = useState([]);
  const [wantToPlayGames, setWantToPlayGames] = useState({});
  const [playedGames, setPlayedGames] = useState({});
  const [gameForPlayedGameRatingModal, setGameForPlayedGameRatingModal] = useState({});//2
  const topbar = useSelector(state => state.topbar.value);
  const searchValue = useSelector(state => state.searchValue.value);
  const dispatch = useDispatch();

  useFetchLatestGamesReleased({ 
    setLatestGamesReleased: setLatestGamesReleased,
    playedGames: playedGames });
  useFetchSearchedGames({
    searchValue: searchValue,
    setSearchedGames: setSearchedGames,
    playedGames: playedGames
  });
  useFetchGameDetails({
    setGameDetails: setGameDetails,
    gameSlug: gameDetailsSlug,
    playedGames: playedGames
  });
  useFetchGameDetailsScreenshots({
    setGameDetailsScreenshots: setGameDetailsScreenshots,
    gameSlug: gameDetailsSlug
  });
  useFetchWantToPlayGames({
    setWantToPlayGames: setWantToPlayGames,
    playedGames: playedGames
  });
  useFetchPlayedGames({
    setPlayedGames: setPlayedGames
  });

  const openGameDetails = function(gameSlug) {//worth thinking if we could move this into the components
    setGameDetailsSlug(gameSlug);
    dispatch(setModalOpen(true));
  };

  return (
    <div className="App">
      <MainContainer>
        <Header />
        <Topbar />
        {topbar === 'search' && 
        <SearchBoard
          searchedGames={searchedGames}
          openGameDetails={openGameDetails}
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          latestGamesReleased={latestGamesReleased}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
        />}
        {topbar === 'want-to-play' &&
        <WantToPlayBoard
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          openGameDetails={openGameDetails}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
        />
        }
        {topbar === 'played' &&
        <PlayedBoard
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          openGameDetails={openGameDetails}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
        />
        }
        <GameDetailsModal
          gameDetails={gameDetails}
          gameDetailsScreenshots={gameDetailsScreenshots}
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          searchedGames={searchedGames}
          latestGamesReleased={latestGamesReleased}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
        />
        <PlayedGameRatingModal
          gameForPlayedGameRatingModal={gameForPlayedGameRatingModal}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />
        <DeletePlayedGameConfirmationModal
          gameForPlayedGameRatingModal={gameForPlayedGameRatingModal}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />
      </MainContainer>
    </div>
  );
}

export { App };