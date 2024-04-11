// export const depositMoney = (amount) => {
//   return (dispatch)=> {
//     dispatch({
//       type: 'deposit',
//       payload: amount
//     })
//   }
// }

// export const withdrawMoney = (amount) => {
//   return (dispatch)=> {
//     dispatch({
//       type: 'withdraw',
//       payload: amount
//     })
//   }
// }

export const depositMoney = (amount) => {
  return {
    type: 'DEPOSIT',
    payload: amount
  }
}

export const withdrawMoney = (amount) => {
  return {
    type: 'WITHDRAW',
    payload: amount
  }
}