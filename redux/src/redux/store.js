// import { createStore } from "redux";
import { applyMiddleware, legacy_createStore as createStore} from 'redux'
// import { configureStore } from '@reduxjs/toolkit';

import  rootReducer  from './rootReducer';
// const dummyReducer = () => 100;

import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: () => [sagaMiddleware]
// })

sagaMiddleware.run(productSaga);

export default store;