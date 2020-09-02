import { FETCH_PRODUCTS } from '../actions/actionTypes';

// loading reducer intial state to maintain products
const initialState = {
  products: [],
};

// fetching products and setting them to reducer
export default function auth(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
}
