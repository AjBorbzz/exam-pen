import axios from "axios";
import { GET_VENDOR } from "./types";

// GET Products
export const getVendors = () => dispatch => {
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

// ADD Products : To simply my code I am going to ommit this for now
// export const addProduct = product => dispatch => {
//   axios
//     .post("/api/products/", product)
//     .then(res => {
//       dispatch({
//         type: ADD_PRODUCT,
//         payload: res.data
//       });
//     })
//     .catch(err => console.log(err));
// };
