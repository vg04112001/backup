export const cartData = (data=[], action) => {
  // console.warn('reducer called', action);
  if(action.type === 'ADD_TO_CART'){
    console.log('Add to cart called', action)
    // console.log(action.dataPass)
    // console.log([action.dataPass])
    // console.log([action.dataPass, ...data])
    return [action.dataPass, ...data]
  }
  else if(action.type === 'REMOVE_FROM_CART'){
    console.log('Remove from cart called', action)
    // data.length = data.length ? data.length - 1 : []
    console.log(action.dataPass)
    // data.splice(action.dataPass, 1)
    const remainingItems = data.filter((item)=> item.id !== action.dataPass)
    console.log(remainingItems)
    return [...remainingItems]
  }
  else if(action.type === 'EMPTY_CART'){
    console.log('Remove from cart called', action)
    data=[]
    return [...data]
  }
  else {
    // return 'no action called'
    return []
  }
}