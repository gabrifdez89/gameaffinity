import React from 'react';
import { GamesList } from '../GamesList';
import { GameCard } from '../GameCard';
import { EmptyWantToPlayGames } from '../EmptyWantToPlayGames';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setWantToPlaySearchValue } from '../../features/search/wantToPlaySearchSlice';
import { SearchBar } from '../SearchBar';

function WantToPlayBoard({
    openGameDetails,
}) {
    const wantToPlaySearchValue = useSelector(state => state.wantToPlaySearchValue.value);
    const wantToPlayGames = useSelector(state => state.wantToPlayGames.value);
    const dispatch = useDispatch();

    return (
        <>   
            {Object.keys(wantToPlayGames).length > 0 &&
            <>
                <SearchBar 
                    searchValue={wantToPlaySearchValue}
                    setSearchValue={(e) => dispatch(setWantToPlaySearchValue(e.target.value))}                
                />
                <GamesList>
                    {wantToPlaySearchValue.length > 0
                    ? Object.values(wantToPlayGames).filter(g => g.name.toLowerCase().includes(wantToPlaySearchValue.toLowerCase())).map((game) => {
                        return (
                            <GameCard 
                                game={game}
                                key={game.id}
                                openGameDetails={openGameDetails}
                            />);})
                    : Object.values(wantToPlayGames).map((game) => {
                        return (
                            <GameCard 
                                game={game}
                                key={game.id}
                                openGameDetails={openGameDetails}
                            />);})}
                </GamesList>
            </>}
            {Object.keys(wantToPlayGames).length === 0 &&
            <EmptyWantToPlayGames />}
        </>
    );
}

export { WantToPlayBoard };