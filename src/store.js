import { configureStore } from '@reduxjs/toolkit';
import topbarReducer from './features/topbar/topbarSlice';
import searchSliceReducer from './features/search/searchSlice';
import wantToPlaySearchSliceReducer from './features/search/wantToPlaySearchSlice';

const store = configureStore({
  reducer: {
    topbar: topbarReducer,
    searchValue: searchSliceReducer,
    wantToPlaySearchValue: wantToPlaySearchSliceReducer,
  }
});

export { store }