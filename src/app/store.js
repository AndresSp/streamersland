import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './examples/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
