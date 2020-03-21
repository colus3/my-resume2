import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import resume from './resume';
import session from './session';


axios.defaults.baseURL = `${process.env.API_URL}/api/v2`;

export default function* rootSaga() {
  yield all([
    fork(resume),
    fork(session),
  ]);
}
