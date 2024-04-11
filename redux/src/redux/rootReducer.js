import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productDataList } from "./productReducer";

export default combineReducers({
  cartDataReducer: cartData,
  productDataReducer: productDataList
})
