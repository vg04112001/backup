import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/action';

const SingleRow = ({singleRowData}) => {
  // console.log(singleRowData)
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cartDataReducer) // this state represents redux state
  console.log(count)
  const newObj = {
    naam: 'ABC',
    age: 22
  };
  return (
       <tr>
          <td>{singleRowData.id}</td>
          <td>{singleRowData.name}</td>
          <td>{singleRowData.username}</td>
          <td>{singleRowData.email}</td>
          <td>
          <Button className="me-2" onClick={()=> dispatch(addToCart(newObj))}>Add To Cart</Button>
          <Button className="me-2" onClick={()=> dispatch(removeFromCart(newObj))}>Remove From Cart</Button>
          </td>
        </tr>
  )
}

export default SingleRow
