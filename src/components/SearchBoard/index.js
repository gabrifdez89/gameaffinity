import React from 'react';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import './index.css';

function SearchBoard({
    searchValue,
    setSearchValue,
    searchedGames,
    openGameDetails,
    wantToPlayGames,
    setWantToPlayGames,
    latestGamesReleased
}) {
    return (
        <>   
            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <GamesList>
            {searchValue.length > 0
            ? searchedGames.map((game) => {
                return (
                    <GameCard
                        game={game}
                        key={game.id}
                        openGameDetails={openGameDetails}
                        wantToPlayGames={wantToPlayGames}
                        setWantToPlayGames={setWantToPlayGames}
                    />
                    );
                    })
                    : latestGamesReleased.map((game) => {
                        return (
                            <GameCard
                                game={game}
                                key={game.id}
                                openGameDetails={openGameDetails}
                                wantToPlayGames={wantToPlayGames}
                                setWantToPlayGames={setWantToPlayGames}
                            />
                            );
                        })}
            </GamesList>
        </>
    );
}

export { SearchBoard };