import { createSlice } from '@reduxjs/toolkit';

export const playedGameRatingModalOpenSlice = createSlice({
    name: 'playedGameRatingModalOpen',
    initialState: {
        value: false
    },
    reducers: {
        setPlayedGameRatingModalOpen: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setPlayedGameRatingModalOpen } = playedGameRatingModalOpenSlice.actions;

export default playedGameRatingModalOpenSlice.reducer;