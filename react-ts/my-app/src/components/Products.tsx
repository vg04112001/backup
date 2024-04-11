import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import { useEffect, useState } from "react";
import data from '../data.json';
import SingleCard from '../common/SingleCard';
import { Product } from "./product";
import { useEffect, useState } from "react";
import axios, {AxiosResponse} from "axios";
// import axios from 'axios';

const Products = () => {
  const [cardData, setCardData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // console.log(data.data)
  
  // const cardDataHandler = () => {
  //   setCardData();
  // }

  const getData = async (): Promise<void> => {
    try {
      const res: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      console.log(res)
      // console.log(res.data);
      setCardData(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
    // console.log('useEffect works');
    getData(); 
  },[])

  // if(isLoading){
  //   return "Loading...."
  // }
  const list = data.data.map((item: Product)=> {
    return <SingleCard singleProduct={item} key={item.id}/>
  })
 
  return (
    <Container>
      <Row>
       {list}
      </Row>
    </Container>
  );
};

export default Products;