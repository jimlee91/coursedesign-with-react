import {
  all,
  call,
  fork,
  take,
  put,
  delay,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import {
  GET_COURSE_FAILURE,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
} from '../reducers/course';
import { dummyCourse } from '../dummys';

function* getCourseAPI() {}
function* getCourse() {
  try {
    // API call
    yield delay(500);
    yield put({
      type: GET_COURSE_SUCCESS,
      data: dummyCourse,
    });
  } catch (err) {
    yield console.error(err);
    yield put({
      type: GET_COURSE_FAILURE,
      error: err,
    });
  }
}
function* watchGetCourse() {
  yield takeLatest(GET_COURSE_REQUEST, getCourse);
}

export default function* courseSaga() {
  yield all([fork(watchGetCourse)]);
}
