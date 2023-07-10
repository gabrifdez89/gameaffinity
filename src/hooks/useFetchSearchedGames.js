import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedGames } from '../features/searchedGames/searchedGamesSlice';

function useFetchSearchedGames() {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.searchValue.value);
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
            dispatch(setSearchedGames(searchedGamesWithOwnData));
          }).catch((err) => {
            console.log(err);
          });
        }
    }, [dispatch, searchValue, playedGames]);
}

export { useFetchSearchedGames };