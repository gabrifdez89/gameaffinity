import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainContainer } from '../MainContainer';
import { useFetchLatestGamesReleased } from '../../hooks/useFetchLatestGamesReleased';
import { useFetchSearchedGames } from '../../hooks/useFetchSearchedGames';
import { useFetchGameDetails } from '../../hooks/useFetchGameDetails';
import { useFetchGameDetailsScreenshots } from '../../hooks/useFetchGameDetailsScreenshots';
import { useFetchWantToPlayGames } from '../../hooks/useFetchWantToPlayGames';
import { useFetchPlayedGames } from '../../hooks/useFetchPlayedGames';
import { Header } from '../Header';
import { GameDetailsModal } from '../GameDetailsModal';
import { SearchBoard } from '../SearchBoard';
import { WantToPlayBoard } from '../WantToPlayBoard';
import { PlayedBoard } from '../PlayedBoard';
import { PlayedGameRatingModal } from '../PlayedGameRatingModal';
import { DeletePlayedGameConfirmationModal } from '../DeletePlayedGameConfirmationModal';
import { Topbar } from '../Topbar';
import { setModalOpen } from '../../features/modalOpen/modalOpenSlice';
import { setGameDetailsSlug } from '../../features/gameDetailsSlug/gameDetailsSlugSlice';
import './index.css';

function App() {
  const topbar = useSelector(state => state.topbar.value);
  const dispatch = useDispatch();

  useFetchLatestGamesReleased();
  useFetchSearchedGames();
  useFetchGameDetails();
  useFetchGameDetailsScreenshots();
  useFetchWantToPlayGames();
  useFetchPlayedGames();

  const openGameDetails = function(gameSlug) {
    dispatch(setGameDetailsSlug(gameSlug));
    dispatch(setModalOpen(true));
  };

  return (
    <div className="App">
      <MainContainer>
        <Header />
        <Topbar />
        {topbar === 'search' && 
        <SearchBoard
          openGameDetails={openGameDetails}
        />}
        {topbar === 'want-to-play' &&
        <WantToPlayBoard
          openGameDetails={openGameDetails}
        />
        }
        {topbar === 'played' &&
        <PlayedBoard
          openGameDetails={openGameDetails}
        />
        }
        <GameDetailsModal />
        <PlayedGameRatingModal />
        <DeletePlayedGameConfirmationModal />
      </MainContainer>
    </div>
  );
}

export { App };