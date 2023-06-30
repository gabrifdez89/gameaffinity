import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {
        value: ''
    },
    reducers: {
        setSearchBar: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSearchBar } = searchBarSlice.actions;

export default searchBarSlice.reducer;