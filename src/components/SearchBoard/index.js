import React from 'react';
import { SearchBar } from '../../features/searchBar/SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import './index.css';
import { useSelector } from 'react-redux';

function SearchBoard({
    searchedGames,
    openGameDetails,
    wantToPlayGames,
    setWantToPlayGames,
    latestGamesReleased,
    playedGames,
    setPlayedGames,
    setIsPlayedGameRatingModalOpen,
    setGameForPlayedGameRatingModal,
    setIsDeletePlayedGameConfirmationModalOpen
}) {
    const searchValue = useSelector(state => state.searchBar.value);

    return (
        <>   
            <SearchBar />
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
                        playedGames={playedGames}
                        setPlayedGames={setPlayedGames}
                        setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
                        setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
                        setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
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
                                playedGames={playedGames}
                                setPlayedGames={setPlayedGames}
                                setIsPlayedGameRatingModalOpen={setIsPlayedGameRatingModalOpen}
                                setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
                                setIsDeletePlayedGameConfirmationModalOpen={setIsDeletePlayedGameConfirmationModalOpen}
                            />
                            );
                        })}
            </GamesList>
        </>
    );
}

export { SearchBoard };