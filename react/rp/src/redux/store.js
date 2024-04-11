import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter/counterSlics';

export default configureStore({
  reducer: {
    counter: counterSlice
  }
});