import axios from 'axios';
import { useEffect } from 'react';

function useFetchGameDetails({
  setGameDetails,
  gameSlug,
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
    
        async function getGameDetails() {
            const { data } = await api(`games/${gameSlug}`);
                        
            return data;
        }
    
        if (gameSlug) {
            getGameDetails().then((gameDetails) => {
              if (playedGames[gameDetails.slug]) {
                gameDetails.own_rating = playedGames[gameDetails.slug]['own_rating'];
                gameDetails.own_review = playedGames[gameDetails.slug]['own_review'];
              }
              setGameDetails(gameDetails);
          }).catch((err) => {
            console.log(err);
          });
        }
    }, [setGameDetails, gameSlug, playedGames]);
}

export { useFetchGameDetails };