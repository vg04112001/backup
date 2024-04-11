export const addToCart = (data) => {
  console.warn('action called....', data);
  // return 'hello';
  return {
    type: "ADD_TO_CART",
    dataPass: data
  }
}

export const removeFromCart = (data) => {
  console.warn('action called....', data);
  // return 'hello';
  return {
    type: "REMOVE_FROM_CART",
    dataPass: data
  }
}

export const emptyCart = () => {
  console.warn('action called....');
  // return 'hello';
  return {
    type: "EMPTY_CART"
  }
}