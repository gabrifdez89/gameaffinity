import axios from 'axios';
import { useEffect } from 'react';

function useFetchGameDetailsScreenshots({ setGameDetailsScreenshots, gameSlug }) {
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
    
        async function getGameDetailsScreenshots() {
            const { data } = await api(`games/${gameSlug}/screenshots`);
                        
            return data.results.map(screenshotItem => screenshotItem.image);
        }
    
        if (gameSlug) {
            getGameDetailsScreenshots().then((gameDetails) => {
                setGameDetailsScreenshots(gameDetails);
          }).catch((err) => {
            console.log(err);
          });
        }
    }, [setGameDetailsScreenshots, gameSlug]);
}

export { useFetchGameDetailsScreenshots };