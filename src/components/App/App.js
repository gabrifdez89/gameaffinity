import React, { useState } from 'react';
import { MainContainer } from '../MainContainer';
import { Header } from '../Header';
import { TopBar } from '../TopBar';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import { useFetchLatestGamesReleased } from '../../hooks/useFetchLatestGamesReleased';
import { useFetchSearchedGames } from '../../hooks/useFetchSearchedGames';
import { useFetchGameDetails } from '../../hooks/useFetchGameDetails';
import { GameDetailsModal } from '../GameDetailsModal';
import { useFetchGameDetailsScreenshots } from '../../hooks/useFetchGameDetailsScreenshots';
import { useFetchWantToPlayGames } from '../../hooks/useFetchWantToPlayGames';
import './App.css';

function App() {
  const [latestGamesReleased, setLatestGamesReleased] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [gameDetailsSlug, setGameDetailsSlug] = useState('');
  const [gameDetails, setGameDetails] = useState();
  const [gameDetailsScreenshots, setGameDetailsScreenshots] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wantToPlayGamesSlugs, setWantToPlayGamesSlugs] = useState([]);

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
    setWantToPlayGamesSlugs: setWantToPlayGamesSlugs
  });

  const openGameDetails = function(gameSlug) {
    setGameDetailsSlug(gameSlug);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <MainContainer>
        <Header />
        <TopBar />
        <SearchBar setSearchValue={setSearchValue}/>
        <GamesList>
          {searchValue.length > 0
          ? searchedGames.map((game) => {
            return (
              <GameCard
                game={game}
                key={game.id}
                openGameDetails={openGameDetails}
                wantToPlayGamesSlugs={wantToPlayGamesSlugs}
                setWantToPlayGamesSlugs={setWantToPlayGamesSlugs}
              />
            );
          })
          : latestGamesReleased.map((game) => {
            return (
              <GameCard
                game={game}
                key={game.id}
                openGameDetails={openGameDetails}
                wantToPlayGamesSlugs={wantToPlayGamesSlugs}
                setWantToPlayGamesSlugs={setWantToPlayGamesSlugs}
              />
            );
          })}
        </GamesList>
        <GameDetailsModal
          gameDetails={gameDetails}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          gameDetailsScreenshots={gameDetailsScreenshots}
          wantToPlayGamesSlugs={wantToPlayGamesSlugs}
          setWantToPlayGamesSlugs={setWantToPlayGamesSlugs}
        />
      </MainContainer>
    </div>
  );
}

export { App };