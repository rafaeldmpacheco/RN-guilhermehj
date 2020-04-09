import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';

import {
  AUTH_LOGOUT,
  AUTH_REQUEST,
  authFailedAction,
  authLogoutAction,
  AuthRequestAction,
  authSuccessAction,
  CREATE_ACCOUNT_REQUEST,
  CreateAccountRequestAction,
  createAccountSuccessAction,
  createAccountFailedAction
} from '../ducks/authentication';

function* authenticate(action: AuthRequestAction) {
  try {
    const { username, password } = action.payload;
    const req = {
      username,
      password,
    };

    const apiCall = ()=> {
      return axios
        .post('http://www.mocky.io/v2/5defab092f0000e7848e0c9e', req)
        .then(response => response.data)
        .catch(err => {
          throw err;
        })
    };
    yield call(apiCall);
    yield put(authSuccessAction());
  } catch (err) {
    yield put(authFailedAction(err));
  }
}

function* logout() {
  try {
    yield put(authLogoutAction());
  } catch (err) {
    yield put(authFailedAction(err));
  }
}

function* createAccount(action: CreateAccountRequestAction) {
  try {
    const { username, password } = action.payload;
    const req = {
      username,
      password,
    };
    const apiCall = ()=> {
      return axios
        .post('http://www.mocky.io/v2/5defab092f0000e7848e0c9e', req)
        .then(response => response.data)
        .catch(err => {
          throw err;
        })
    };
    yield call(apiCall);
    yield put(createAccountSuccessAction());
  } catch (err) {
    yield put(createAccountFailedAction(err));
  }
}

export default [
  takeLatest(AUTH_REQUEST, authenticate),
  takeLatest(AUTH_LOGOUT, logout),
  takeLatest(CREATE_ACCOUNT_REQUEST, createAccount),
];

