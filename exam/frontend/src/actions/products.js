import axios from "axios";
import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  SHIP_PRODUCT
} from "./types";

// GET Products
export const getProducts = () => dispatch => {
  axios
    .get("/api/products/")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE Products
export const deleteProduct = id => dispatch => {
  axios
    // use back ticks to provide a dynamic ${id}
    .delete(`/api/products/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// SHIP Products
export const shipProduct = id => dispatch => {
  axios
    // use back ticks to provide a dynamic ${id}
    .put(`/api/products/${id}/`)
    .then(res => {
      dispatch({
        type: SHIP_PRODUCT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD Products
export const addProduct = product => dispatch => {
  axios
    .post("/api/products/", product)
    .then(res => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
