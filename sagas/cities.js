import axios from 'axios';
import {
  all,
  call,
  fork,
  put,
  takeLatest,
  takeEvery,
  take,
  delay,
} from 'redux-saga/effects';
import {
  SEARCH_COUNTRIES_FAILURE,
  SEARCH_COUNTRIES_SUCCESS,
  SEARCH_COUNTRIES_REQUEST,
  CITY_SUCCESS,
  CITY_REQUEST,
  CITY_FAILURE,
} from '../reducers/cities';
import { dummyCities, dummyGuide } from '../dummys';

// 전체 도시 가져오기
function* searchCitiesAPI() {}
function* searchCities(action) {
  try {
    // 처음 들어왔을때는 action.data.keyword 가 없음 . 전체 검색
    // 검색 시 해당 키워드만 filter해서 검색
    yield delay(1500);
    yield put({
      type: SEARCH_COUNTRIES_SUCCESS,
      data: dummyCities,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEARCH_COUNTRIES_FAILURE,
      error: err,
    });
  }
}
function* watchSearchCities() {
  yield takeLatest(SEARCH_COUNTRIES_REQUEST, searchCities);
}

// 해당 도시 가져오기
function* getCityAPI() {}
function* getCity(action) {
  try {
    // 처음 들어왔을때는 action.data.keyword 가 없음 . 전체 검색
    // 검색 시 해당 키워드만 filter해서 검색
    // yield delay(1500);
    yield put({
      type: CITY_SUCCESS,
      data: dummyGuide,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CITY_FAILURE,
      error: err,
    });
  }
}
function* watchGetCity() {
  yield takeLatest(CITY_REQUEST, getCity);
}

export default function* citiesSaga() {
  yield all([fork(watchSearchCities), fork(watchGetCity)]);
}
