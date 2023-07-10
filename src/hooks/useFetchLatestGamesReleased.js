import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLatestGamesReleased } from '../features/latestGamesReleased/latestGamesReleasedSlice';

function useFetchLatestGamesReleased() {
  const dispatch = useDispatch();
  const playedGames = useSelector(state => state.playedGames.value);
  useEffect(() => {
    const api = axios.create({
      baseURL: 'https://api.rawg.io/api/',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      params: {
        'key': 'e257ff7e01a847989265619f5e2d86e7',
      }
    });

    async function getLatestGamesReleased() {
      const to_date = new Date();
      const from_date = new Date();
      from_date.setMonth(from_date.getMonth() - 1);
      
      const { data } = await api(`games?dates=${from_date.toISOString().substring(0, 10)},${to_date.toISOString().substring(0, 10)}`);
      
      return data.results;
    }

    getLatestGamesReleased().then((latestGamesReleased) => {
      const latestGamesReleasedWithOwnData = latestGamesReleased.map((game) => {
        if (playedGames[game.slug]) {
          game.own_rating = playedGames[game.slug]['own_rating'];
          game.own_review = playedGames[game.slug]['own_review'];
        }
        return game;
      });
      dispatch(setLatestGamesReleased(latestGamesReleasedWithOwnData));
    }).catch((err) => {
      console.log(err);
    });
  }, [dispatch, playedGames]);
}

export { useFetchLatestGamesReleased };