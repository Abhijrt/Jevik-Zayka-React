import {
  signIn,
  signInSuccess,
  signUp,
  signOut,
  sendVerificationMail,
  verifyAccount,
} from './auth';
import { setMessage, clearMessage, setError, clearError } from './alert';
import { loadingStart, loadingStop } from './progress';

export {
  signIn,
  loadingStart,
  loadingStop,
  signUp,
  signInSuccess,
  sendVerificationMail,
  signOut,
  setMessage,
  clearMessage,
  setError,
  clearError,
  verifyAccount,
};
