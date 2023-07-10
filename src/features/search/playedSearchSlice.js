import { createSlice } from '@reduxjs/toolkit';

export const playedSearchSlice = createSlice({
    name: 'playedSearchValue',
    initialState: {
        value: ''
    },
    reducers: {
        setPlayedSearchValue: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setPlayedSearchValue } = playedSearchSlice.actions;

export default playedSearchSlice.reducer;