import { createSlice } from '@reduxjs/toolkit';

export const deletePlayedGameConfirmationModalOpenSlice = createSlice({
    name: 'deletePlayedGameConfirmationModalOpen',
    initialState: {
        value: false
    },
    reducers: {
        setDeletePlayedGameConfirmationModalOpen: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setDeletePlayedGameConfirmationModalOpen } = deletePlayedGameConfirmationModalOpenSlice.actions;

export default deletePlayedGameConfirmationModalOpenSlice.reducer;