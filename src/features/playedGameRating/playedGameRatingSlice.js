import { createSlice } from '@reduxjs/toolkit';

export const playedGameRatinSlice = createSlice({
    name: 'playedGameRating',
    initialState: {
        value: 0
    },
    reducers: {
        setPlayedGameRating: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setPlayedGameRating } = playedGameRatinSlice.actions;

export default playedGameRatinSlice.reducer;