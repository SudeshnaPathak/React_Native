import { configureStore } from '@reduxjs/toolkit';
import retailReducer from './RetailSlice';

export const store = configureStore({
  reducer: {
    retail: retailReducer
  }
});
