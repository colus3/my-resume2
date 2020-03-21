import {
  all, fork, takeLatest, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_ME_REQUEST,
  LOAD_ME_SUCCESS,
  LOAD_ME_FAILURE,

  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from '../reducers/session';

function getMeAPI() {
  return axios.get('/auth/me', { withCredentials: true });
}

function* getMe() {
  try {
    const result = yield call(getMeAPI);
    yield put({ // post reducer의 데이터를 수정
      type: LOAD_ME_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_ME_FAILURE,
      error: e,
    });
  }
}

function* watchGetMe() {
  yield takeLatest(LOAD_ME_REQUEST, getMe);
}

function logoutAPI() {
  return axios.post('/auth/logout',{}, { withCredentials: true });
}

function* logout() {
  try {
    const result = yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    });
  }
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

export default function* resumeSaga() {
  yield all([
    fork(watchGetMe),
    fork(watchLogout),
  ]);
}
