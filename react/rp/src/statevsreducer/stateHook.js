import { useState } from 'react'

function Counter() {
  // declare a state variable called count and a function to update it
  const [count, setCount] = useState(0);

  // define a function to increment the count by one
  function increment() {
    setCount((c) => c + 1);
  }

  // define a function to decrement the count by one
  function decrement() {
    setCount((c) => c - 1);
  }

  // return the JSX to render the component
  return (
    <div>
      <h1>Counter</h1>
      <p>The current count is {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}