import axios from 'axios';
import { useEffect } from 'react';

function useFetchSearchedGames({
  setSearchedGames,
  searchValue,
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
    
        async function getSearchedGames() {
            const { data } = await api(`games?search=${searchValue}`);
                        
            return data.results;
        }
    
        if (searchValue.length > 0) {
          getSearchedGames().then((searchedGames) => {
            const searchedGamesWithOwnData = searchedGames.map((game) => {
              if (playedGames[game.slug]) {
                game.own_rating = playedGames[game.slug]['own_rating'];
                game.own_review = playedGames[game.slug]['own_review'];
              }
              return game;
            });
            setSearchedGames(searchedGamesWithOwnData);
          }).catch((err) => {
            console.log(err);
          });
        }
    }, [setSearchedGames, searchValue, playedGames]);
}

export { useFetchSearchedGames };