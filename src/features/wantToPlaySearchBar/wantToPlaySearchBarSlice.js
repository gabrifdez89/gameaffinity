import { createSlice } from '@reduxjs/toolkit';

export const wantToPlaySearchBarSlice = createSlice({
    name: 'wantToPlaySearchBar',
    initialState: {
        value: ''
    },
    reducers: {
        setWantToPlaySearchBar: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setWantToPlaySearchBar } = wantToPlaySearchBarSlice.actions;

export default wantToPlaySearchBarSlice.reducer;