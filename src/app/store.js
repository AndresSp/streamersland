import { configureStore } from '@reduxjs/toolkit';
import streamersSelectSlice from './streeamersSelect/streamersSelectSlice';

export default configureStore({
  reducer: {
    streamersSelect: streamersSelectSlice
  },
});
