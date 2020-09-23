import {
  FETCH_PRODUCTS,
  SET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL,
} from '../actions/actionTypes';

// loading reducer intial state to maintain products
const initialState = {
  products: [],
  productDetail: null,
};

// fetching products and setting them to reducer
export default function auth(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SET_PRODUCT_DETAIL: {
      return {
        ...state,
        productDetail: action.product,
      };
    }
    case CLEAR_PRODUCT_DETAIL: {
      return {
        ...state,
        productDetail: null,
      };
    }
    default:
      return state;
  }
}
