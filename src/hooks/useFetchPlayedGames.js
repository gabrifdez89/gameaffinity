import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPlayedGames } from '../features/playedGames/playedGamesSlice';

function useFetchPlayedGames() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function getPlayedGames() {
      let playedGamesLocalStorage = await JSON.parse(localStorage.getItem('played_games'));
      if (playedGamesLocalStorage === null) {
        playedGamesLocalStorage = {};
      }
      
      return playedGamesLocalStorage;
    }

    getPlayedGames().then((games) => {
        dispatch(setPlayedGames(games));
    });
  }, [dispatch]);
}

export { useFetchPlayedGames };