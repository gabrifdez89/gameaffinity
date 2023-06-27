import React from 'react';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import { EmptyWantToPlayGames } from '../EmptyWantToPlayGames';
import './index.css';

function WantToPlayBoard({
    wantToPlaySearchValue,
    setWantToPlaySearchValue,
    wantToPlayGames,
    setWantToPlayGames,
    openGameDetails
}) {
    return (
        <>   
            {Object.keys(wantToPlayGames).length > 0 &&
            <>
                <SearchBar
                    searchValue={wantToPlaySearchValue}
                    setSearchValue={setWantToPlaySearchValue}
                />
                <GamesList>
                    {wantToPlaySearchValue.length > 0
                    ? Object.values(wantToPlayGames).filter(g => g.name.toLowerCase().includes(wantToPlaySearchValue.toLowerCase())).map((game) => {
                        return (
                            <GameCard 
                                game={game}
                                key={game.id}
                                openGameDetails={openGameDetails}
                                wantToPlayGames={wantToPlayGames}
                                setWantToPlayGames={setWantToPlayGames}
                            />);})
                    : Object.values(wantToPlayGames).map((game) => {
                        return (
                            <GameCard 
                                game={game}
                                key={game.id}
                                openGameDetails={openGameDetails}
                                wantToPlayGames={wantToPlayGames}
                                setWantToPlayGames={setWantToPlayGames}
                            />);})}
                </GamesList>
            </>}
            {Object.keys(wantToPlayGames).length === 0 &&
            <EmptyWantToPlayGames />}
        </>
    );
}

export { WantToPlayBoard };