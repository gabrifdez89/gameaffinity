import { createSlice } from '@reduxjs/toolkit';

export const wantToPlayGamesSlice = createSlice({
    name: 'wantToPlayGames',
    initialState: {
        value: {}
    },
    reducers: {
        setWantToPlayGames: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setWantToPlayGames } = wantToPlayGamesSlice.actions;

export default wantToPlayGamesSlice.reducer;