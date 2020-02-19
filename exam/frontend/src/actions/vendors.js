import axios from "axios";
import { GET_VENDORS } from "./types";

// GET Vendors
export const getVendors = () => dispatch => {
  axios
    .get("/api/vendors/")
    .then(res => {
      dispatch({
        type: GET_VENDORS,
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
