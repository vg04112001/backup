import { useReducer } from 'react'

function Counter() {
  // declare a reducer function that handles different actions
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      default:
        return state
    }
  }

  // declare a state variable and a dispatch function using useReducer
  const [count, dispatch] = useReducer(reducer, 0)

  // define a function to increment the count by one
  function increment() {
    dispatch({ type: 'increment' })
  }

  // define a function to decrement the count by one
  function decrement() {
    dispatch({ type: 'decrement' })
  }

  // return the JSX to render the component
  return (
    <div>
      <h1>Counter</h1>
      <p>The current count is {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}