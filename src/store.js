import { configureStore } from '@reduxjs/toolkit';
import topbarReducer from './features/topbar/topbarSlice';
import searchBarReducer from './features/searchBar/searchBarSlice';

const store = configureStore({
  reducer: {
    topbar: topbarReducer,
    searchBar: searchBarReducer,
  }
});

export { store }