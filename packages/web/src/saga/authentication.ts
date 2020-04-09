import { takeLatest, call } from 'redux-saga/effects';
import { } from 'react-router-dom';
import { CREATE_ACCOUNT_SUCCESS } from '@serasa/common';
import * as toast from '../toast';
import { navigate } from '../routes';

function* onCreateAccountSuccess() {
  yield call(toast.showSuccessToast, 'Conta criada com sucesso!');
  yield call(navigate, '/login');
}

export default [
  takeLatest(CREATE_ACCOUNT_SUCCESS, onCreateAccountSuccess),
];