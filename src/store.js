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
import gameDetailsReducer from './features/gameDetails/gameDetailsSlice';
import gameDetailsScreenshotsReducer from './features/gameDetailsScreenshots/gameDetailsScreenshotsSlice';
import latestGamesReleasedReducer from './features/latestGamesReleased/latestGamesReleasedSlice';
import searchedGamesReducer from './features/searchedGames/searchedGamesSlice';

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
    gameDetails: gameDetailsReducer,
    gameDetailsScreenshots: gameDetailsScreenshotsReducer,
    latestGamesReleased: latestGamesReleasedReducer,
    searchedGames: searchedGamesReducer,
  }
});

export { store }