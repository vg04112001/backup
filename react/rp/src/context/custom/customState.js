import { useContext, useState } from "react";
import DataContext from "./customContext";


const DataState = (props) => {
  const s1 = {
    naam: "ABC",
    age: 21
  }
  const [state, setState] = useState(s1);

  const update = () => [
    setTimeout(()=> {
      setState({
        naam: "XYZ",
        age: 22
      });
    },1500)
  ]

  return (
    <DataContext.Provider value={{state, update}}>
      {props.children}
    </DataContext.Provider>
  )
}

const useDataContext = () => {
  return useContext(DataContext);
};

export {DataState, useDataContext};