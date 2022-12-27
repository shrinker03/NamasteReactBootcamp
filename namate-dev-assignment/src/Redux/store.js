import { configureStore } from '@reduxjs/toolkit';
import userInfoSlice from './Slices/userInfoSlice';

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice
  }
});
