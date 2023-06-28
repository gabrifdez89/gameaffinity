import axios from 'axios';
import { useEffect } from 'react';

function useFetchLatestGamesReleased({
  setLatestGamesReleased,
  playedGames }) {
  useEffect(() => {
    const api = axios.create({
      baseURL: 'https://api.rawg.io/api/',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      params: {
        'key': '14c3d9116d5e49cb8ed834b4f613306c',
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
      setLatestGamesReleased(latestGamesReleasedWithOwnData);
    }).catch((err) => {
      console.log(err);
    });
  }, [setLatestGamesReleased, playedGames]);
}

export { useFetchLatestGamesReleased };