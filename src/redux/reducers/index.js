import {combineReducers} from '@reduxjs/toolkit';
import actionReducers from './action';

export default combineReducers({
  action: actionReducers,
});