import React, { useState } from 'react';
import { MainContainer } from '../MainContainer';
import { Header } from '../Header';
import { TopBar } from '../TopBar';
import { useFetchLatestGamesReleased } from '../../hooks/useFetchLatestGamesReleased';
import { useFetchSearchedGames } from '../../hooks/useFetchSearchedGames';
import { useFetchGameDetails } from '../../hooks/useFetchGameDetails';
import { GameDetailsModal } from '../GameDetailsModal';
import { useFetchGameDetailsScreenshots } from '../../hooks/useFetchGameDetailsScreenshots';
import { useFetchWantToPlayGames } from '../../hooks/useFetchWantToPlayGames';
import { useFetchPlayedGames } from '../../hooks/useFetchPlayedGames';
import { SearchBoard } from '../SearchBoard';
import { WantToPlayBoard } from '../WantToPlayBoard';
import './App.css';

function App() {
  const [currentTopBarOption, setCurrentTopBarOption] = useState('search');
  const [latestGamesReleased, setLatestGamesReleased] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [wantToPlaySearchValue, setWantToPlaySearchValue] = useState('');
  const [gameDetailsSlug, setGameDetailsSlug] = useState('');
  const [gameDetails, setGameDetails] = useState();
  const [gameDetailsScreenshots, setGameDetailsScreenshots] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wantToPlayGames, setWantToPlayGames] = useState({});
  const [playedGames, setPlayedGames] = useState({});

  useFetchLatestGamesReleased({ setLatestGamesReleased });
  useFetchSearchedGames({ 
    setSearchedGames: setSearchedGames,
    searchValue: searchValue
  });
  useFetchGameDetails({
    setGameDetails: setGameDetails,
    gameSlug: gameDetailsSlug
  });
  useFetchGameDetailsScreenshots({
    setGameDetailsScreenshots: setGameDetailsScreenshots,
    gameSlug: gameDetailsSlug
  });
  useFetchWantToPlayGames({
    setWantToPlayGames: setWantToPlayGames
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
        <TopBar
          currentTopBarOption={currentTopBarOption}
          setCurrentTopBarOption={setCurrentTopBarOption}
        />
        {currentTopBarOption === 'search' && 
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
        />}
        {currentTopBarOption === 'want-to-play' &&
        <WantToPlayBoard
          wantToPlaySearchValue={wantToPlaySearchValue}
          setWantToPlaySearchValue={setWantToPlaySearchValue}
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          openGameDetails={openGameDetails}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
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
        />
      </MainContainer>
    </div>
  );
}

export { App };