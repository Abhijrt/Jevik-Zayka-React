import { combineReducers } from 'redux';
import auth from './auth';
import progress from './progress';
import alert from './alert';
import products from './products';

export default combineReducers({
  auth,
  progress,
  alert,
  products,
});
