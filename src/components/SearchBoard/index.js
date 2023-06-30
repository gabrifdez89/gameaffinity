import React from 'react';
import { SearchBar } from '../SearchBar';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../features/search/searchSlice';

function SearchBoard({
    searchedGames,
    openGameDetails,
    wantToPlayGames,
    setWantToPlayGames,
    latestGamesReleased,
    playedGames,
    setPlayedGames,
    setGameForPlayedGameRatingModal,
}) {
    const searchValue = useSelector(state => state.searchValue.value);
    const dispatch = useDispatch();

    return (
        <>   
            <SearchBar 
                searchValue={searchValue}
                setSearchValue={(e) => dispatch(setSearchValue(e.target.value))}
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
                        playedGames={playedGames}
                        setPlayedGames={setPlayedGames}
                        setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
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
                                setGameForPlayedGameRatingModal={setGameForPlayedGameRatingModal}
                            />
                            );
                        })}
            </GamesList>
        </>
    );
}

export { SearchBoard };