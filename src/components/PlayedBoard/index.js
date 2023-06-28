import React from 'react';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import { EmptyPlayedGames } from '../EmptyPlayedGames';
import './index.css';

function PlayedBoard({
    playedGamesSearchValue,
    setPlayedGamesSearchValue,
    wantToPlayGames,
    setWantToPlayGames,
    openGameDetails,
    playedGames,
    setPlayedGames,
    setIsPlayedGameRatingModalOpen,
    setGameForPlayedGameRatingModal,
    setIsDeletePlayedGameConfirmationModalOpen
}) {
    return (
        <>   
            {Object.keys(playedGames).length > 0 &&
            <>
                <SearchBar
                    searchValue={playedGamesSearchValue}
                    setSearchValue={setPlayedGamesSearchValue}
                />
                <GamesList>
                    {playedGamesSearchValue.length > 0
                    ? Object.values(playedGames).filter(g => g.name.toLowerCase().includes(playedGamesSearchValue.toLowerCase())).map((game) => {
                        return (
                            <GameCard 
                                game={game}
                                key={game.id}
                                openGameDetails={openGameDetails}
                                wantToPlayGames={wantToPlayGames}
                                setWantToPlayGames={setWantToPlayGames}
                                playedGames={playedGames}
                                setPlayedGames={setPlayedGames}
                                setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
                                setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
                                setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
                            />);})
                    : Object.values(playedGames).map((game) => {
                        return (
                            <GameCard 
                                game={game}
                                key={game.id}
                                openGameDetails={openGameDetails}
                                wantToPlayGames={wantToPlayGames}
                                setWantToPlayGames={setWantToPlayGames}
                                playedGames={playedGames}
                                setPlayedGames={setPlayedGames}
                                setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
                                setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
                                setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
                            />);})}
                </GamesList>
            </>}
            {Object.keys(playedGames).length === 0 &&
            <EmptyPlayedGames />}
        </>
    );
}

export { PlayedBoard };