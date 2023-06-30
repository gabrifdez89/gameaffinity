import React from 'react';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import { EmptyPlayedGames } from '../EmptyPlayedGames';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayedSearchValue } from '../../features/search/playedSearchSlice';

function PlayedBoard({
    wantToPlayGames,
    setWantToPlayGames,
    openGameDetails,
    playedGames,
    setPlayedGames,
    setIsPlayedGameRatingModalOpen,
    setGameForPlayedGameRatingModal,
}) {
    const playedSearchValue = useSelector(state => state.playedSearchValue.value);
    const dispatch = useDispatch();

    return (
        <>   
            {Object.keys(playedGames).length > 0 &&
            <>
                <SearchBar
                    searchValue={playedSearchValue}
                    setSearchValue={(e) => dispatch(setPlayedSearchValue(e.target.value))}
                />
                <GamesList>
                    {playedSearchValue.length > 0
                    ? Object.values(playedGames).filter(g => g.name.toLowerCase().includes(playedSearchValue.toLowerCase())).map((game) => {
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
                            />);})}
                </GamesList>
            </>}
            {Object.keys(playedGames).length === 0 &&
            <EmptyPlayedGames />}
        </>
    );
}

export { PlayedBoard };