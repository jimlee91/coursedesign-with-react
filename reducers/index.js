import { combineReducers } from 'redux';
import user from './user';
import cities from './cities';

const rootReducer = combineReducers({ user, cities });

export default rootReducer;
