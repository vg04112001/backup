import React from 'react'
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import {actionCreators} from '../state/index'
import { depositMoney, withdrawMoney } from '../state/action-creators';

const Shop = () => {
  const dispatch = useDispatch();
  return (
    <div>
       <Button variant="outline-success" onClick={() => dispatch(depositMoney(100))}>+</Button>
      Action Perform
      <Button variant="outline-success" onClick={() => dispatch(withdrawMoney(100))}>-</Button>
    </div>
  )
}

export default Shop
