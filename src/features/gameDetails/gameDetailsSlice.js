import { createSlice } from '@reduxjs/toolkit';

export const gameDetailsSlice = createSlice({
    name: 'gameDetails',
    initialState: {
        value: undefined
    },
    reducers: {
        setGameDetails: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setGameDetails } = gameDetailsSlice.actions;

export default gameDetailsSlice.reducer;