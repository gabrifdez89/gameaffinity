import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWantToPlayGames } from '../features/wantToPlayGames/wantToPlayGamesSlice';

function useFetchWantToPlayGames() {
  const dispatch = useDispatch();
  const playedGames = useSelector(state => state.playedGames.value);
  useEffect(() => {
    async function getWantToPlayGames() {
      let wantToPlayGamesLocalStorage = await JSON.parse(localStorage.getItem('want_to_play_games'));
      if (wantToPlayGamesLocalStorage === null) {
        wantToPlayGamesLocalStorage = {};
      }

      return wantToPlayGamesLocalStorage;
    }

    getWantToPlayGames().then((games) => {
      const wantToPlayGamesWithOwnData = JSON.parse(JSON.stringify(games));
      for (let key in wantToPlayGamesWithOwnData) {
        if (playedGames[key]) {
          wantToPlayGamesWithOwnData[key]['own_rating'] = playedGames[key]['own_rating'];
          wantToPlayGamesWithOwnData[key]['own_review'] = playedGames[key]['own_review'];
        }
      }
      dispatch(setWantToPlayGames(wantToPlayGamesWithOwnData));
    });
  }, [dispatch, playedGames]);
}

export { useFetchWantToPlayGames };