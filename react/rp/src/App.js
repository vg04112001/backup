import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import About from "./components/About";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Products from "./components/Products";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import SingleProduct from "./components/SingleProduct";
import {DataState} from "./context/custom/customState";
import CounterState from "./context/counter/counterState";
import { AppProvider } from "./context/products/productContext";
// import DataState from "./context/customState";

function AppRoutes() {
  // const d = "Data comes from Main App component";
  const routes = useRoutes(
    [
      {path:'/',element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/products',element:<Products/>},
      {path:'/singleproduct/:id',element:<SingleProduct/>},
      {path:"*",element:<ErrorPage />}
    ]
  )
  return routes;
}

function App() {
  // const d = "Data comes from Main App component";
  // const [data, setData] = useState({email: ''})
  // const sendData = (data) => {
  //   setData(data)
  // }
  // useEffect(() => {
  //   console.log("working....");
  // }, []);

  return (
    <>
      {/* <div>
        <div>{data.email}</div>
      </div> */}
      <AppProvider>
        <DataState>
          <CounterState>
          <Router>
            <Header />
            <AppRoutes/>
            <Footer />
          </Router>
          </CounterState>
        </DataState>
      </AppProvider>
    </>
  );
}

export default App;