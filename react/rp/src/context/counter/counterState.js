import { useState } from "react";
import CounterContext from "./counterContext";

const CounterState = (props) => {
  // const s1 = {
  //   naam: "ABC",
  const [countValue, setCountValue] = useState(0);
  const increment = () => setCountValue(countValue + 1);
  const decrement = () => setCountValue(countValue - 1);

  return (
    <CounterContext.Provider value={{increment, decrement, countValue}}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterState;