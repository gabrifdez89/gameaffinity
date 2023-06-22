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
import './App.css';

function App() {
  const [latestGamesReleased, setLatestGamesReleased] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [gameDetailsSlug, setGameDetailsSlug] = useState('');
  const [gameDetails, setGameDetails] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useFetchLatestGamesReleased({ setLatestGamesReleased });
  useFetchSearchedGames({ 
    setSearchedGames: setSearchedGames,
    searchValue: searchValue
  });
  useFetchGameDetails({
    setGameDetails: setGameDetails,
    gameSlug: gameDetailsSlug
  });

  const openGameDetails = function(gameSlug) {
    //Set game details slug
    setGameDetailsSlug(gameSlug);
    //Open modal
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
              />
            );
          })
          : latestGamesReleased.map((game) => {
            return (
              <GameCard
                game={game}
                key={game.id}
                openGameDetails={openGameDetails}
              />
            );
          })}
        </GamesList>
        <GameDetailsModal
          gameDetails={gameDetails}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </MainContainer>
    </div>
  );
}

export { App };