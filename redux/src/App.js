import "./App.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from "./components/Shop";
import { addToCart, removeFromCart, emptyCart } from "./redux/action";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "./redux/productAction";
import Table from 'react-bootstrap/Table';
import SingleRow from "./components/SingleRow";
import { useEffect, useState } from "react";
import ALT from './components/ALT'
import Status from "./components/Status";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";


// function AppRoutes() {
//   const routes = useRoutes(
//     [
//       {path:'/cart',element:<Cart/>},
//     ]
//   )
//   return routes;
// }

function App() {
  const dispatch = useDispatch();
  const newVar = useSelector((state) => state.productDataReducer) // this state represents redux state
  // console.log(newVar)

  const newObj = {
    naam: 'ABC',
    age: 22
  };

  useEffect(()=> {
    dispatch(productList())
  },[]);

  return (
    <div className="App">
      <Header />
      <ALT/>
      {/* <Shop/> */}
      {/* <Button className="me-2" onClick={()=> dispatch(addToCart(newObj))}>Add To Cart</Button>
      <Button className="me-2" onClick={()=> dispatch(removeFromCart(newObj))}>Remove From Cart</Button> */}
      <Button className="me-2" onClick={()=> dispatch(emptyCart())}>Empty Cart</Button>
      {/* <Button onClick={()=> dispatch(productList())}>Get Products</Button> */}
      <div>
      {newVar.length}
      </div>
      <Status/>
      <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            {/* <th>Username</th>
            <th>Email</th> */}
            <th>Buttons to be performed</th>
          </tr>
        </thead>
        <tbody>
          {
            newVar.map((item)=>{
              return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                <Button className="me-2" onClick={()=> dispatch(addToCart(item))}>Add To Cart</Button>
                <Button className="me-2" onClick={()=> dispatch(removeFromCart(item.id))}>Remove From Cart</Button>
                </td>
              </tr>
              )
            })
          }
          {/* {
            newVar.map((item)=>{
              return (
                <SingleRow singleRowData={item} key={item.id}/>
              )
            })
          } */}
        </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
