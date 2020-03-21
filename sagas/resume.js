import {
  all, fork, takeLatest, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_RESUME_REQUEST,
  LOAD_RESUME_SUCCESS,
  LOAD_RESUME_FAILURE,
} from '../reducers/resume';

function getResumeAPI(id) {
  return axios.get(`/resumes/id/${id}`);
}

function* getResume(action) {
  try {
    const result = yield call(getResumeAPI, action.id);
    yield put({ // post reducer의 데이터를 수정
      type: LOAD_RESUME_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_RESUME_FAILURE,
      error: e,
    });
  }
}

function* watchGetResume() {
  yield takeLatest(LOAD_RESUME_REQUEST, getResume);
}

export default function* resumeSaga() {
  yield all([
    fork(watchGetResume),
  ]);
}
