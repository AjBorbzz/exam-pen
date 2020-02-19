import axios from "axios";
import { GET_VENDORS, ADD_VENDOR } from "./types";

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

// ADD Vendor
export const addVendor = vendor => dispatch => {
  axios
    .post("/api/vendors/", vendor)
    .then(res => {
      dispatch({
        type: ADD_VENDOR,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
