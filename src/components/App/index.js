import React, { useState } from 'react';
import { MainContainer } from '../MainContainer';
import { Header } from '../Header';
import { useFetchLatestGamesReleased } from '../../hooks/useFetchLatestGamesReleased';
import { useFetchSearchedGames } from '../../hooks/useFetchSearchedGames';
import { useFetchGameDetails } from '../../hooks/useFetchGameDetails';
import { GameDetailsModal } from '../GameDetailsModal';
import { useFetchGameDetailsScreenshots } from '../../hooks/useFetchGameDetailsScreenshots';
import { useFetchWantToPlayGames } from '../../hooks/useFetchWantToPlayGames';
import { useFetchPlayedGames } from '../../hooks/useFetchPlayedGames';
import { SearchBoard } from '../SearchBoard';
import { WantToPlayBoard } from '../WantToPlayBoard';
import { PlayedBoard } from '../PlayedBoard';
import { PlayedGameRatingModal } from '../PlayedGameRatingModal';
import { DeletePlayedGameConfirmationModal } from '../DeletePlayedGameConfirmationModal';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Topbar } from '../Topbar';
import { setModalOpen } from '../../features/modalOpen/modalOpenSlice';
import { setGameDetailsSlug } from '../../features/gameDetailsSlug/gameDetailsSlugSlice';
import { setGameDetails } from '../../features/gameDetails/gameDetailsSlice';
import { setGameDetailsScreenshots } from '../../features/gameDetailsScreenshots/gameDetailsScreenshotsSlice';

function App() {
  const [latestGamesReleased, setLatestGamesReleased] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [wantToPlayGames, setWantToPlayGames] = useState({});
  const [playedGames, setPlayedGames] = useState({});

  const topbar = useSelector(state => state.topbar.value);
  const searchValue = useSelector(state => state.searchValue.value);
  const gameDetailsSlug = useSelector(state => state.gameDetailsSlug.value);
  const dispatch = useDispatch();

  useFetchLatestGamesReleased({ 
    setLatestGamesReleased: setLatestGamesReleased,
    playedGames: playedGames });
  useFetchSearchedGames({
    searchValue: searchValue,
    setSearchedGames: setSearchedGames,
    playedGames: playedGames
  });
  useFetchGameDetails({
    setGameDetails: (gameDetails) => { dispatch(setGameDetails(gameDetails)) },
    gameSlug: gameDetailsSlug,
    playedGames: playedGames
  });
  useFetchGameDetailsScreenshots({
    setGameDetailsScreenshots: (gameDetailsScreenshots) => { dispatch(setGameDetailsScreenshots(gameDetailsScreenshots)) },
    gameSlug: gameDetailsSlug
  });
  useFetchWantToPlayGames({
    setWantToPlayGames: setWantToPlayGames,
    playedGames: playedGames
  });
  useFetchPlayedGames({
    setPlayedGames: setPlayedGames
  });

  const openGameDetails = function(gameSlug) {//worth thinking if we could move this into the components
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
          searchedGames={searchedGames}
          openGameDetails={openGameDetails}
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          latestGamesReleased={latestGamesReleased}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />}
        {topbar === 'want-to-play' &&
        <WantToPlayBoard
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          openGameDetails={openGameDetails}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />
        }
        {topbar === 'played' &&
        <PlayedBoard
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          openGameDetails={openGameDetails}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />
        }
        <GameDetailsModal
          wantToPlayGames={wantToPlayGames}
          setWantToPlayGames={setWantToPlayGames}
          searchedGames={searchedGames}
          latestGamesReleased={latestGamesReleased}
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />
        <PlayedGameRatingModal
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />
        <DeletePlayedGameConfirmationModal
          playedGames={playedGames}
          setPlayedGames={setPlayedGames}
        />
      </MainContainer>
    </div>
  );
}

export { App };