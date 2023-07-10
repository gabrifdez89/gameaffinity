import { createSlice } from '@reduxjs/toolkit';

export const gameDetailsScreenshotsSlice = createSlice({
    name: 'gameDetailsScreenshots',
    initialState: {
        value: []
    },
    reducers: {
        setGameDetailsScreenshots: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setGameDetailsScreenshots } = gameDetailsScreenshotsSlice.actions;

export default gameDetailsScreenshotsSlice.reducer;