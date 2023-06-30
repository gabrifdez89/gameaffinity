import { createSlice } from '@reduxjs/toolkit';

export const wantToPlaySearchSlice = createSlice({
    name: 'wantToPlaySearchValue',
    initialState: {
        value: ''
    },
    reducers: {
        setWantToPlaySearchValue: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setWantToPlaySearchValue } = wantToPlaySearchSlice.actions;

export default wantToPlaySearchSlice.reducer;