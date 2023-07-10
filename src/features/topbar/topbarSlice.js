import { createSlice } from '@reduxjs/toolkit';

export const topbarSlice = createSlice({
    name: 'topbar',
    initialState: {
        value: 'search'
    },
    reducers: {
        setTopbar: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setTopbar } = topbarSlice.actions;

export default topbarSlice.reducer;