import { takeLatest, call } from 'redux-saga/effects';
import { CREATE_ACCOUNT_SUCCESS } from '@serasa/common';

import { navigate } from '../routes';

function* onCreateAccountSuccess() {
  yield call(
    navigate,
    'Modal',
    {
      text: 'Conta criada com sucesso!',
      fallbackRoute: 'Login',
      type: 'success',
    }
  );
}

export default [
  takeLatest(CREATE_ACCOUNT_SUCCESS, onCreateAccountSuccess),
];