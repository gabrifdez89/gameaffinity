import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameDetails } from '../features/gameDetails/gameDetailsSlice';

function useFetchGameDetails() {
    const dispatch = useDispatch();
    const gameDegailsSlug = useSelector(state => state.gameDetailsSlug.value);
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
    
        async function getGameDetails() {
            const { data } = await api(`games/${gameDegailsSlug}`);
                        
            return data;
        }
    
        if (gameDegailsSlug) {
            getGameDetails().then((gameDetails) => {
              if (playedGames[gameDetails.slug]) {
                gameDetails.own_rating = playedGames[gameDetails.slug]['own_rating'];
                gameDetails.own_review = playedGames[gameDetails.slug]['own_review'];
              }
              dispatch(setGameDetails(gameDetails));
          }).catch((err) => {
            console.log(err);
          });
        }
    }, [dispatch, gameDegailsSlug, playedGames]);
}

export { useFetchGameDetails };