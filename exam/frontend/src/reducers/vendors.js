import { GET_VENDORS } from "../actions/types.js";

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
    default:
      return state;
  }
}
