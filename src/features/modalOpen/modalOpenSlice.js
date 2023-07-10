import { createSlice } from '@reduxjs/toolkit';

export const modalOpenSlice = createSlice({
    name: 'modalOpen',
    initialState: {
        value: false
    },
    reducers: {
        setModalOpen: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setModalOpen } = modalOpenSlice.actions;

export default modalOpenSlice.reducer;