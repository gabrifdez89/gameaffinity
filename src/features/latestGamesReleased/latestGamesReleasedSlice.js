import { createSlice } from '@reduxjs/toolkit';

export const latestGamesReleasedSlice = createSlice({
    name: 'latestGamesReleased',
    initialState: {
        value: []
    },
    reducers: {
        setLatestGamesReleased: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setLatestGamesReleased } = latestGamesReleasedSlice.actions;

export default latestGamesReleasedSlice.reducer;