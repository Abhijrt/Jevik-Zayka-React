import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SET_ERROR_NULL,
} from '../actions/actionTypes';

// auth reducer intial state to maintain authentication status
const initialState = {
  user: '',
  error: null,
  isAdmin: false,
  isLoggedIn: false,
};

// changing store on the basis of different actions
export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAdmin: action.isAdmin,
        isLoggedIn: true,
      };
    }

    case SIGNIN_FAILED: {
      return {
        ...state,
        error: action.error,
        isLoggedIn: false,
        isAdmin: 'ddd',
        user: null,
      };
    }

    case SET_ERROR_NULL: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
}
