import { configureStore } from '@reduxjs/toolkit';
import topbarReducer from './features/topbar/topbarSlice';
import searchSliceReducer from './features/search/searchSlice';
import wantToPlaySearchSliceReducer from './features/search/wantToPlaySearchSlice';
import playedSearchSliceReducer from './features/search/playedSearchSlice';
import deletePlayedGameConfirmationModalOpenReducer from './features/deletePlayedGameConfirmationModalOpen/deletePlayedGameConfirmationModalOpenSlice';
import playedGameRatingModalOpenReducer from './features/playedGameRatingModalOpen/playedGameRatingModalOpenSlice';

const store = configureStore({
  reducer: {
    topbar: topbarReducer,
    searchValue: searchSliceReducer,
    wantToPlaySearchValue: wantToPlaySearchSliceReducer,
    playedSearchValue: playedSearchSliceReducer,
    deletePlayedGameConfirmationModalOpen: deletePlayedGameConfirmationModalOpenReducer,
    playedGameRatingModalOpen: playedGameRatingModalOpenReducer,
  }
});

export { store }