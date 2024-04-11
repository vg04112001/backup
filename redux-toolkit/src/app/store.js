import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    //counterExample represents the state
    counterExample: counterReducer,
  }
})