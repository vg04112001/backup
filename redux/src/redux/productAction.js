export const productList = () => {
  // let data = 'products hello'
  // let data = await fetch('https://jsonplaceholder.typicode.com/users');
  // data = await data.json();
  console.warn('product list action called....');
  // return 'hello';
  return {
    type: "PRODUCT_LIST"
    // productData: 'apple orange'
  }
}