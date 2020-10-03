import { all, delay, fork, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE } from '../reducers/user';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

function logInAPI(data) {
  return axios.post('/api/login', data)
}

//요청이 실패하는것에 대비해서 try-catch 사용
function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data)
    yield delay(1000)
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data
    })
  } catch(err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data
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
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/signup');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI)
    yield delay(1000)
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function followAPI() {
  return axios.post('/api/follow');
}

function* follow(action) {
  try {
    // const result = yield call(followAPI)
    yield delay(1000)
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI() {
  return axios.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI)
    yield delay(1000)
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}


function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow)
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow)
}

/**
 * 로그인이 될때까지 기다리겠다
 * 즉, 로그인 액션이 실행되면 두번째 인자로 준 함수가 실행됨
 */
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([
    fork(watchUnfollow),
    fork(watchFollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ])
}