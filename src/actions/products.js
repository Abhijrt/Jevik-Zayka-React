import { FETCH_PRODUCTS } from './actionTypes';
import { loadingStart, loadingStop } from '../actions';
import { APIUrls } from '../helpers';

// storing product in store,
export function setProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products,
  };
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(loadingStart());
    const url = APIUrls.fetchProducts();
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('data', data);
        // if (data.success) {
        //   console.log('wroking');
        //   dispatch(setProducts(data.data.fruits));
        // } else {
        // }
        dispatch(setProducts(data.data.fruits));
        dispatch(loadingStop());
      });
  };
}
