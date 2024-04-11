// const reducer = (state=0, action) => {
//   if(action.type === 'deposit'){
//     return state + action.payload
//   }
//   else if(action.type === 'withdraw'){
//     return state - action.payload
//   }
//   else{
//     return state;
//   }
// }

// export default reducer;
// const DEPOSIT = 'DEPOSIT';
// const WITHDRAW = 'WITHDRAW';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload;
    case 'WITHDRAW':
      return state - action.payload;
    default:
      return state;
  }
};
export default reducer