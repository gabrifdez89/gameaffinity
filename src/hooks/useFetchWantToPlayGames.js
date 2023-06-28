import { useEffect } from 'react';

function useFetchWantToPlayGames({
    setWantToPlayGames,
    playedGames }) {
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
      setWantToPlayGames(wantToPlayGamesWithOwnData);
    });
  }, [setWantToPlayGames, playedGames]);
}

export { useFetchWantToPlayGames };