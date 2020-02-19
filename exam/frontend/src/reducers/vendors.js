import { GET_VENDORS, ADD_VENDOR } from "../actions/types.js";

const initialState = {
  vendors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VENDORS:
      return {
        ...state,
        vendors: action.payload
      };
    case ADD_VENDOR:
      return {
        ...state,
        vendors: [...state.vendors, action.payload]
      };
    default:
      return state;
  }
}
