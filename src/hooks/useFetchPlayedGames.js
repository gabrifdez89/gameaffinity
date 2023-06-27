import { useEffect } from 'react';

function useFetchPlayedGames({
    setPlayedGames }) {
  useEffect(() => {
    async function getPlayedGames() {
      let playedGamesLocalStorage = await JSON.parse(localStorage.getItem('played_games'));
      if (playedGamesLocalStorage === null) {
        playedGamesLocalStorage = {};
      }

      return playedGamesLocalStorage;
    }

    getPlayedGames().then((games) => {
        setPlayedGames(games);
    });
  }, [setPlayedGames]);
}

export { useFetchPlayedGames };