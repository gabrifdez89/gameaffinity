import React from 'react';
import './index.css';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';

function SearchBoard({
    searchValue,
    setSearchValue,
    searchedGames,
    openGameDetails,
    wantToPlayGamesSlugs,
    setWantToPlayGamesSlugs,
    latestGamesReleased
}) {
    return (
        <>   
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
        </>
    );
}

export { SearchBoard };