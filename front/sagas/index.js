import { all, call } from 'redux-saga/effects';
import user from './user';
import cities from './cities';
import course from './course';

export default function* rootSaga() {
  yield all([call(user), call(cities), call(course)]);
}
