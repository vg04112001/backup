import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import About from "./components/About";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Products from "./components/Products";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";


function AppRoutes() {
  const d:string = "Data comes from Main App component";
  const routes = useRoutes(
    [
      {path:'/',element:<Home parentToChild={d}/>},
      {path:'/about',element:<About/>},
      {path:'/products',element:<Products/>},
      {path:"*",element:<ErrorPage />}
    ]
  )
  return routes;
}

function App() {
  // const d = "Data comes from Main App component";
  // useEffect(() => {
  //   console.log("working....");
  // }, []);

  return (
    <>
      {/* <div>
        <div>{data.email}</div>
      </div> */}
      <Router>
        <Header />
        <AppRoutes/>
        <Footer />
      </Router>
    </>
  );
}

export default App;