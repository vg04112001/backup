import React, { useContext } from "react";
// import Custom from './Custom'
// import FormComponent from './FormComponent'
import Counter from "./Counter";
import CounterContext from "../context/counter/counterContext";
import { CounterByRedux } from "../redux/features/counter/CounterByRedux";

const Home = (props) => {
  const counterVar = useContext(CounterContext);
  return (
    <div>
      <div>
        Home Page
        {/* <Custom sendData={sendData} pass={d}/> */}
        {/* <div>{data.email}</div> */}
      </div>
      <div>{props.parentToChild}</div>
      <Counter />
      <button onClick={counterVar.increment}>+1</button>
      <button onClick={counterVar.decrement}>-1</button>

      {/* <CounterByRedux /> */}
      {/* <FormComponent/> */}
    </div>
  );
};

export default Home;