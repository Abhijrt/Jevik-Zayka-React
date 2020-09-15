import {
  FETCH_PRODUCTS,
  SET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL,
} from './actionTypes';
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
        if (data.success) {
          dispatch(setMessage('successful', 'Product Added'));
        } else {
          dispatch(setError('Error', 'Error in adding Product'));
        }
      });
    await dispatch(loadingStop());
  };
}

function setProductDetail(product) {
  return {
    type: SET_PRODUCT_DETAIL,
    product,
  };
}

// getting detail of product with product id
export function getProductDetail(id) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.getProductDetail(id);
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(setProductDetail(data.data.product));
        } else {
          dispatch(setError('Error', 'Error in fetching Product Detail'));
        }
      });
    await dispatch(loadingStop());
  };
}

export function clearProductDetail() {
  return {
    type: CLEAR_PRODUCT_DETAIL,
  };
}
