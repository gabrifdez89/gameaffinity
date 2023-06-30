import { createSlice } from '@reduxjs/toolkit';

export const gameDetailsSlugSlice = createSlice({
    name: 'gameDetailsSlug',
    initialState: {
        value: ''
    },
    reducers: {
        setGameDetailsSlug: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setGameDetailsSlug } = gameDetailsSlugSlice.actions;

export default gameDetailsSlugSlice.reducer;