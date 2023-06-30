import { createSlice } from '@reduxjs/toolkit';

export const playedGameReviewSlice = createSlice({
    name: 'playedGameReview',
    initialState: {
        value: ''
    },
    reducers: {
        setPlayedGameReview: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setPlayedGameReview } = playedGameReviewSlice.actions;

export default playedGameReviewSlice.reducer;