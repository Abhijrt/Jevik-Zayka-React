import { APIUrls, getFormBody, setToken } from '../helpers';
import { loadingStart, loadingStop } from './progress';
import { SIGNIN_SUCCESS, SIGNIN_FAILED, SET_ERROR_NULL } from './actionTypes';

// action creator when sign in is successed
function signInSuccess(user, isAdmin) {
  return {
    type: SIGNIN_SUCCESS,
    user,
    isAdmin,
  };
}

// action creator when sign in is failed
function signInFailed(error) {
  return {
    type: SIGNIN_FAILED,
    error,
  };
}

// action creator to set error to null
export function setErrorToNull() {
  return {
    type: SET_ERROR_NULL,
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
          dispatch(signInSuccess(data.data.user, data.data.user.is_admin));
          setToken(data.data.token);
        } else {
          dispatch(signInFailed(data.message));
        }
        dispatch(loadingStop());
      });
  };
}
