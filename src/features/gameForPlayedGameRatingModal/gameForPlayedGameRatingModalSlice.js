import { createSlice } from '@reduxjs/toolkit';

export const gameForPlayedGameRatingModalSlice = createSlice({
    name: 'gameForPlayedGameRatingModal',
    initialState: {
        value: {}
    },
    reducers: {
        setGameForPlayedGameRatingModal: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setGameForPlayedGameRatingModal } = gameForPlayedGameRatingModalSlice.actions;

export default gameForPlayedGameRatingModalSlice.reducer;