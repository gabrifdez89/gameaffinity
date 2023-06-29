import { createSlice } from '@reduxjs/toolkit';

export const topbarSlice = createSlice({
    name: 'topbar',
    initialState: {
        value: 'search'
    },
    reducers: {
        setTopbarSearch: state => {
            state.value = 'search';
        },
        setTopbarWantToPlay: state => {
            state.value = 'want-to-play';
        },
        setTopbarPlayed: state => {
            state.value = 'played';
        }
    }
});

export const { setTopbarSearch, setTopbarWantToPlay, setTopbarPlayed } = topbarSlice.actions;

export default topbarSlice.reducer;