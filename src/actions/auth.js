import { APIUrls, getFormBody, setToken } from '../helpers';
import { loadingStart, loadingStop } from './progress';
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SET_ERROR_NULL,
  SET_MESSAGE,
  SET_MESSAGE_TO_NULL,
} from './actionTypes';

// action creator when sign in is successed
function signInSuccess(user, isAdmin, isVerified) {
  return {
    type: SIGNIN_SUCCESS,
    user,
    isAdmin,
    isVerified,
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

export function setMessage(message) {
  return { type: SET_MESSAGE, message };
}

export function setMessageToNull() {
  return {
    type: SET_MESSAGE_TO_NULL,
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
          dispatch(
            signInSuccess(
              data.data.user,
              data.data.user.is_admin,
              data.data.user.is_verified
            )
          );
          setToken(data.data.token);
        } else {
          dispatch(signInFailed(data.message));
        }
        dispatch(loadingStop());
      });
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
          dispatch(signInFailed(data.message));
        }
        dispatch(loadingStop());
      });
  };
}
