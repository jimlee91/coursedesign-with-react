import { combineReducers } from 'redux';
import user from './user';
import cities from './cities';
import course from './course';

const rootReducer = combineReducers({ user, cities, course });

export default rootReducer;
