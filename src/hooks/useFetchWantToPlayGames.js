//import axios from 'axios';
import { useEffect } from 'react';

function useFetchWantToPlayGames({
    wantToPlayGamesSlugs,
    setWantToPlayGamesSlugs }) {
  useEffect(() => {
    /* const api = axios.create({
      baseURL: 'https://api.rawg.io/api/',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      params: {
        'key': '14c3d9116d5e49cb8ed834b4f613306c',
      }
    }); */

    /* async function getLatestGamesReleased() {
      const to_date = new Date();
      const from_date = new Date();
      from_date.setMonth(from_date.getMonth() - 1);
      
      const { data } = await api(`games?dates=${from_date.toISOString().substring(0, 10)},${to_date.toISOString().substring(0, 10)}`);
      
      return data.results;
    }

    getLatestGamesReleased().then((latestGamesReleased) => {
      setLatestGamesReleased(latestGamesReleased);
    }).catch((err) => {
      console.log(err);
    }); */
    async function getWantToPlayGamesSlugs() {
        let wantToPlayGamesSlugsLocalStorage = await JSON.parse(localStorage.getItem('want_to_play_games_slugs'));
        if (wantToPlayGamesSlugsLocalStorage === undefined) {
            wantToPlayGamesSlugsLocalStorage = [];
        }

        console.log('want to play games slugs: ', wantToPlayGamesSlugs);

        return wantToPlayGamesSlugsLocalStorage;
    }

    getWantToPlayGamesSlugs().then((slugs) => {
        setWantToPlayGamesSlugs(slugs);
    });
  }, [wantToPlayGamesSlugs, setWantToPlayGamesSlugs]);
}