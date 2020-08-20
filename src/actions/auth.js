import { APIUrls, getFormBody, setToken } from '../helpers';
import { loadingStart, loadingStop } from './progress';
import { SIGNIN_SUCCESS, SIGNOUT } from './actionTypes';
import { setMessage, setError } from './index';
import * as jwtDecode from 'jwt-decode';

// action creator when sign in is successed
export function signInSuccess(user, isAdmin, isVerified) {
  return {
    type: SIGNIN_SUCCESS,
    user,
    isAdmin,
    isVerified,
  };
}

// function to make request to API for login
export function signIn(username, password) {
  return (dispatch) => {
    dispatch(loadingStart());
    const url = APIUrls.signin();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          let user = jwtDecode(data.data.token);
          dispatch(signInSuccess(user, user.is_admin, user.is_verified));
          setToken(data.data.token);
        } else {
          dispatch(setError(data.message));
        }
        dispatch(loadingStop());
      });
  };
}

// function to signout user
export function signOut() {
  return {
    type: SIGNOUT,
  };
}

// function to make request to API for create user
export function signUp(
  email,
  firstName,
  lastName,
  password,
  confirmPassword,
  mobileNumber
) {
  return (dispatch) => {
    dispatch(loadingStart());
    const url = APIUrls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
        mobileNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(setMessage('Registration Successful'));
        } else {
          dispatch(setError(data.message));
        }
        dispatch(loadingStop());
      });
  };
}
