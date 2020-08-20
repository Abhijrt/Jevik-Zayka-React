import {
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_ERROR,
  CLEAR_ERROR,
} from './actionTypes';

// for setting up message in alert state
function setMessage(message) {
  return {
    type: SET_MESSAGE,
    message,
  };
}

function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}

function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}

function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}

export { setMessage, clearMessage, setError, clearError };
