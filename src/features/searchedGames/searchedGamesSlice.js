import { createSlice } from '@reduxjs/toolkit';

export const searchedGamesSlice = createSlice({
    name: 'searchedGames',
    initialState: {
        value: []
    },
    reducers: {
        setSearchedGames: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSearchedGames } = searchedGamesSlice.actions;

export default searchedGamesSlice.reducer;