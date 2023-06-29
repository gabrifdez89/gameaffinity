import { configureStore } from '@reduxjs/toolkit'
import topbarReducer from './features/topbar/topbarSlice'

const store = configureStore({
  reducer: {
    topbar: topbarReducer
  }
});

export { store }