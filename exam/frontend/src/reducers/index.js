import { combineReducers } from "redux";
import products from "./products";
import vendors from "./vendors";

export default combineReducers({
  products,
  vendors
});
