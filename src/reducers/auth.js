import { SIGNIN_SUCCESS, SIGNOUT } from '../actions/actionTypes';

// auth reducer intial state to maintain authentication status
const initialState = {
  user: '',
  isAdmin: false,
  isLoggedIn: false,
  isVerified: false,
};

// changing store on the basis of different actions
export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAdmin: action.isAdmin,
        isVerified: action.isVerified,
        isLoggedIn: true,
      };
    }

    case SIGNOUT: {
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        error: null,
        isAdmin: false,
        isVerified: false,
      };
    }
    default:
      return state;
  }
}
