import { all, call, delay, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import postSaga from './post';
import userSaga from './user';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true

export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(userSaga),
  ])
}