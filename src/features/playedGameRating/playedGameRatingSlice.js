import { createSlice } from '@reduxjs/toolkit';

export const playedGameRatingSlice = createSlice({
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

export const { setPlayedGameRating } = playedGameRatingSlice.actions;

export default playedGameRatingSlice.reducer;