import { all, delay, fork, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data)
}

//요청이 실패하는것에 대비해서 try-catch 사용
function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data)
    yield delay(1000)
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data
    })
  } catch(err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data
    })
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI)
    yield delay(1000)
    yield put({
      type: 'LOG_OUT_SUCCESS',
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      error: err.response.data,
    });
  }
}

/**
 * 로그인이 될때까지 기다리겠다
 * 즉, 로그인 액션이 실행되면 두번째 인자로 준 함수가 실행됨
 */
function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn)
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut)
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}