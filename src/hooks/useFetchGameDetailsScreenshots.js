import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameDetailsScreenshots } from '../features/gameDetailsScreenshots/gameDetailsScreenshotsSlice';

function useFetchGameDetailsScreenshots() {
    const dispatch = useDispatch();
    const gameDetailsSlug = useSelector(state => state.gameDetailsSlug.value);
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
    
        async function getGameDetailsScreenshots() {
            const { data } = await api(`games/${gameDetailsSlug}/screenshots`);
                        
            return data.results.map(screenshotItem => screenshotItem.image);
        }
    
        if (gameDetailsSlug) {
            getGameDetailsScreenshots().then((gameDetails) => {
                dispatch(setGameDetailsScreenshots(gameDetails));
          }).catch((err) => {
            console.log(err);
          });
        }
    }, [dispatch, gameDetailsSlug]);
}

export { useFetchGameDetailsScreenshots };