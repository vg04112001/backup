import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useContext, useEffect, useState } from "react";
// import data from '../data.json';
import SingleCard from "../common/SingleCard";
import axios from "axios";
import CounterContext from "../context/counter/counterContext";
import { useProductContext } from "../context/products/productContext";

const Products = () => {
  const [cardData, setCardData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const { isLoading, products} = useProductContext();
  // console.log(data.data)

  // const cardDataHandler = () => {
  //   setCardData();
  // }

  // const getData = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:8000/data`);
  //     // console.log(res.data);
  //     setCardData(res.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   // console.log('useEffect works');
  //   getData();
  // }, []);

  if (isLoading) {
    return "Loading....";
  }
  const list = products.map((item) => {
    // console.log(item)
    return <SingleCard single={item} key={item.id} />;
  });

  return (
    <Container>
      <Row>
        {list}
      </Row>
    </Container>
  );
};

export default Products;