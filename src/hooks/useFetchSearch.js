import axios from 'axios';
import { useEffect } from 'react';

function useFetchSearch({ setGames, searchValue }) {
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
          const { data } = await api(`games?search=${searchValue}&key=14c3d9116d5e49cb8ed834b4f613306c`);
          
          console.log(data.results);
      
          return data.results;
        }
    
        getSearchedGames().then((searchedGames) => {
          setGames(searchedGames);
        }).catch((err) => {
          console.log(err);
        });
    }, [setGames, searchValue]);
}

export { useFetchSearch };