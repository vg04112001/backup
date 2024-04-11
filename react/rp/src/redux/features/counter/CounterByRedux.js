import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementUsingRedux, incrementUsingRedux } from './counterSlics'
// import styles from './Counter.module.css'

export function CounterByRedux() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementUsingRedux())}
        >
          Increment
        </button>
        {/* <span>{count}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementUsingRedux())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}