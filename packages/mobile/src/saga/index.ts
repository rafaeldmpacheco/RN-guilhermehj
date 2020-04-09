import { all } from 'redux-saga/effects';
import { allEffects } from '@serasa/common';

import mobileAuthEffects from './authentication';

export const sagaEffects = function* rootSaga() {
  return yield all([
    ...mobileAuthEffects,
    ...allEffects,
  ]);
};