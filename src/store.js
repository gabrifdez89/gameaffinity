import { configureStore } from '@reduxjs/toolkit';
import topbarReducer from './features/topbar/topbarSlice';
import searchSliceReducer from './features/search/searchSlice';
import wantToPlaySearchSliceReducer from './features/search/wantToPlaySearchSlice';
import playedSearchSliceReducer from './features/search/playedSearchSlice';
import deletePlayedGameConfirmationModalOpenReducer from './features/deletePlayedGameConfirmationModalOpen/deletePlayedGameConfirmationModalOpenSlice';
import playedGameRatingModalOpenReducer from './features/playedGameRatingModalOpen/playedGameRatingModalOpenSlice';
import playedGameRatingReducer from './features/playedGameRating/playedGameRatingSlice';
import playedGameReviewReducer from './features/playedGameReview/playedGameReviewSlice';
import modalOpenReducer from './features/modalOpen/modalOpenSlice';
import gameDetailsSlugReducer from './features/gameDetailsSlug/gameDetailsSlugSlice';
import gameForPlayedGameRatingModalReducer from './features/gameForPlayedGameRatingModal/gameForPlayedGameRatingModalSlice';

const store = configureStore({
  reducer: {
    topbar: topbarReducer,
    searchValue: searchSliceReducer,
    wantToPlaySearchValue: wantToPlaySearchSliceReducer,
    playedSearchValue: playedSearchSliceReducer,
    deletePlayedGameConfirmationModalOpen: deletePlayedGameConfirmationModalOpenReducer,
    playedGameRatingModalOpen: playedGameRatingModalOpenReducer,
    playedGameRating: playedGameRatingReducer,
    playedGameReview: playedGameReviewReducer,
    modalOpen: modalOpenReducer,
    gameDetailsSlug: gameDetailsSlugReducer,
    gameForPlayedGameRatingModal: gameForPlayedGameRatingModalReducer,
  }
});

export { store }