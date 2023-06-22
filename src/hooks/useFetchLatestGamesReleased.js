import axios from 'axios';
import { useEffect } from 'react';

function useFetchLatestGamesReleased({ setLatestGamesReleased }) {
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
      const { data } = await api('games?dates=2023-05-16,2023-06-16&key=14c3d9116d5e49cb8ed834b4f613306c');
      
      console.log(data.results);
  
      return data.results;
    }

    getLatestGamesReleased().then((latestGamesReleased) => {
      setLatestGamesReleased(latestGamesReleased);
    }).catch((err) => {
      console.log(err);
    });
  }, [setLatestGamesReleased]);
}

export { useFetchLatestGamesReleased };