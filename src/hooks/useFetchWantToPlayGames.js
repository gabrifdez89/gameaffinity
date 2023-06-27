import { useEffect } from 'react';

function useFetchWantToPlayGames({
    setWantToPlayGames }) {
  useEffect(() => {
    async function getWantToPlayGames() {
      let wantToPlayGamesLocalStorage = await JSON.parse(localStorage.getItem('want_to_play_games'));
      if (wantToPlayGamesLocalStorage === null) {
        wantToPlayGamesLocalStorage = {};
      }

      return wantToPlayGamesLocalStorage;
    }

    getWantToPlayGames().then((games) => {
      setWantToPlayGames(games);
    });
  }, [setWantToPlayGames]);
}

export { useFetchWantToPlayGames };