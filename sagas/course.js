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
  ADD_SPOT_FAILURE,
  ADD_SPOT_REQUEST,
  ADD_SPOT_SUCCESS,
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

function* addSpotAPI() {}
function* addSpot(action) {
  try {
    // API call
    yield delay(300);
    yield put({
      type: ADD_SPOT_SUCCESS,
      data: dummyCourse,
    });
  } catch (err) {
    yield console.error(err);
    yield put({
      type: ADD_SPOT_FAILURE,
      error: err,
    });
  }
}
function* watchAddSpot() {
  yield takeLatest(ADD_SPOT_REQUEST, addSpot);
}

export default function* courseSaga() {
  yield all([fork(watchGetCourse)]);
}
