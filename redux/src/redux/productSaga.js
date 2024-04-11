import {put, takeEvery} from 'redux-saga/effects'

function* getProducts(action){
  // console.log(action)
  let data = yield fetch('https://jsonplaceholder.typicode.com/users');
  data = yield data.json();
  console.log('get product saga called', data);
  yield put({
    type: 'SET_PRODUCT_LIST',
    dataP: data
  })
  
}

function* productSaga(){
  yield takeEvery('PRODUCT_LIST', getProducts)
}

export default productSaga;