import React, { useState } from 'react';
import { MainContainer } from '../MainContainer';
import { Header } from '../Header';
import { TopBar } from '../TopBar';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { DummyGames } from '../../utils/DummyGames';
import { GameCard } from '../GameCard';
import { useFetchLatestGamesReleased } from '../../hooks/useFetchLatestGamesReleased';
import './App.css';

function App() {
  const [games, setGames] = useState(DummyGames);

  useFetchLatestGamesReleased({ setGames });

  return (
    <div className="App">
      <MainContainer>
        <Header />
        <TopBar />
        <SearchBar setGames={setGames}/>
        <GamesList>
          {games.map((game) => {
            return (
              <GameCard
                id={game.id}
                slug={game.slug}
                name={game.name}
                released={game.released}
                background_image={game.background_image}
                metacritic={game.metacritic}
                rating={game.rating}
                rating_top={game.rating_top}
                playtime={game.playtime}
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