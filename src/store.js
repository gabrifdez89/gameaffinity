import { configureStore } from '@reduxjs/toolkit';
import topbarReducer from './features/topbar/topbarSlice';
import searchBarReducer from './features/searchBar/searchBarSlice';
import wantToPlaySearchBarReducer from './features/wantToPlaySearchBar/wantToPlaySearchBarSlice';

const store = configureStore({
  reducer: {
    topbar: topbarReducer,
    searchBar: searchBarReducer,
    wantToPlaySearchBar: wantToPlaySearchBarReducer,
  }
});

export { store }