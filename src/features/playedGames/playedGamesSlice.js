import { createSlice } from '@reduxjs/toolkit';

export const playedGamesSlice = createSlice({
    name: 'playedGames',
    initialState: {
        value: {}
    },
    reducers: {
        setPlayedGames: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setPlayedGames } = playedGamesSlice.actions;

export default playedGamesSlice.reducer;