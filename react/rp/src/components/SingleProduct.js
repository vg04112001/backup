import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import data from '../data.json';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataContext from '../context/custom/customContext';
import { useDataContext } from '../context/custom/customState';

const SingleProduct = () => {
  // const contextUse = useContext(DataContext);
  const [singleCardData, setSingleCardData] = useState([]);
  const newTry = useDataContext();
  // console.log(newTry)
  // console.log(contextUse);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/data?id=${id}`);
      // console.log(res.data[0])
      // console.log(res.data);
      setSingleCardData(res.data[0])
      // setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
    // console.log('useEffect works');
    newTry.update();
    getSingleProduct();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
    <Row className='mb-5'>
      {/* <Col>{id}</Col> */}
      <Col>Name: {newTry.state.naam}</Col>
      <Col>Age:{newTry.state.age}</Col>
    </Row>
    <Row>
      <Col lg={6} md={6} sm={6} className='d-flex align-items-center justify-content-center'>
        <img src={`${singleCardData.imgSrc}`} alt=""/>
      </Col>
      <Col lg={6} md={6} sm={6}>
        <p>{singleCardData.title}</p>
        <p>{singleCardData.text}</p>
      </Col>
    </Row>
    </>
  )
}

export default SingleProduct
