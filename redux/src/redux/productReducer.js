export const productDataList = (data=[], action) => {
  // if(action.type === 'PRODUCT_LIST'){
  //   console.log('Product list called', action)
  //   return [action.productData]
  // }
  if(action.type === 'SET_PRODUCT_LIST'){
    console.log('Set Product list called', action)
    return [...action.dataP]
  }
  else {
    // return 'no action called'
    return data
  }
}