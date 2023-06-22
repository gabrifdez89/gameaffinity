import React, { useState } from 'react';
import { MainContainer } from '../MainContainer';
import { Header } from '../Header';
import { TopBar } from '../TopBar';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import { useFetchLatestGamesReleased } from '../../hooks/useFetchLatestGamesReleased';
import { useFetchSearchedGames } from '../../hooks/useFetchSearchedGames';
import './App.css';

function App() {
  const [latestGamesReleased, setLatestGamesReleased] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useFetchLatestGamesReleased({ setLatestGamesReleased });
  useFetchSearchedGames({ 
    setSearchedGames: setSearchedGames,
    searchValue: searchValue
  });

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
              />
            );
          })
          : latestGamesReleased.map((game) => {
            return (
              <GameCard
                game={game}
                key={game.id}
              />
            );
          })}
        </GamesList>
      </MainContainer>
    </div>
  );
}

export { App };