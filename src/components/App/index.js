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
import { useSelector } from 'react-redux';
import { Topbar } from '../../features/topbar/Topbar';

function App() {
  const [latestGamesReleased, setLatestGamesReleased] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [wantToPlaySearchValue, setWantToPlaySearchValue] = useState('');
  const [playedGamesSearchValue, setPlayedGamesSearchValue] = useState('');
  const [gameDetailsSlug, setGameDetailsSlug] = useState('');
  const [gameDetails, setGameDetails] = useState();
  const [gameDetailsScreenshots, setGameDetailsScreenshots] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wantToPlayGames, setWantToPlayGames] = useState({});
  const [playedGames, setPlayedGames] = useState({});
  const [isPlayedGameRatingModalOpen, setIsPlayedGameRatingModalOpen] = useState(false);
  const [playedGameRating, setPlayedGameRating] = useState(0);
  const [playedGameReview, setPlayedGameReview] = useState('');
  const [gameForPlayedGameRatingModal, setGameForPlayedGameRatingModal] = useState({});
  const [isDeletePlayedGameConfirmationModalOpen, setIsDeletePlayedGameConfirmationModalOpen] = useState(false);
  const topbar = useSelector(state => state.topbar.value);

  useFetchLatestGamesReleased({ 
    setLatestGamesReleased: setLatestGamesReleased,
    playedGames: playedGames });
  useFetchSearchedGames({ 
    setSearchedGames: setSearchedGames,
    searchValue: searchValue,
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

  const openGameDetails = function(gameSlug) {
    setGameDetailsSlug(gameSlug);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <MainContainer>
        <Header />
        <Topbar />
        {topbar === 'search' && 
        <SearchBoard
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchedGames={searchedGames}
          openGameDetails={openGameDetails}
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          latestGamesReleased={latestGamesReleased}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
          setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
        />}
        {topbar === 'want-to-play' &&
        <WantToPlayBoard
          wantToPlaySearchValue={wantToPlaySearchValue}
          setWantToPlaySearchValue={setWantToPlaySearchValue}
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          openGameDetails={openGameDetails}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
          setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
        />
        }
        {topbar === 'played' &&
        <PlayedBoard
          playedGamesSearchValue={playedGamesSearchValue}
          setPlayedGamesSearchValue={setPlayedGamesSearchValue}
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          openGameDetails={openGameDetails}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
          setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
        />
        }
        <GameDetailsModal
          gameDetails={gameDetails}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          gameDetailsScreenshots={gameDetailsScreenshots}
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          searchedGames={searchedGames}
          latestGamesReleased={latestGamesReleased}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
          setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
        />
        <PlayedGameRatingModal
          isPlayedGameRatingModalOpen={isPlayedGameRatingModalOpen}
          setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
          playedGameRating={playedGameRating}
          setPlayedGameRating={setPlayedGameRating}
          playedGameReview={playedGameReview}
          setPlayedGameReview={setPlayedGameReview}
          gameForPlayedGameRatingModal={gameForPlayedGameRatingModal}
          setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />
        <DeletePlayedGameConfirmationModal
          gameForPlayedGameRatingModal={gameForPlayedGameRatingModal}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
          isDeletePlayedGameConfirmationModalOpen={isDeletePlayedGameConfirmationModalOpen}
          setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
        />
      </MainContainer>
    </div>
  );
}

export { App };