import { FETCH_PRODUCTS } from './actionTypes';
import { loadingStart, loadingStop } from '../actions';
import { APIUrls, getFormBodyMultipart, getToken } from '../helpers';
import { setMessage, setError } from './alert';

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
      headers: {
        Accept: 'text/plain',
      },
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

export function addProduct(formData) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.addProduct();
    await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      body: getFormBodyMultipart(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log('working');
          dispatch(setMessage('successful', 'Product Added'));
        } else {
          dispatch(setError('Error', 'Error in adding Product'));
        }
      });
    await dispatch(loadingStop());
  };
}
