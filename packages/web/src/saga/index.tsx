import {all} from 'redux-saga/effects';
import { allEffects } from '@serasa/common';

import webAuthEffects from './authentication';

export const sagaEffects = function* rootSaga() {
  return yield all([
    ...allEffects,
    ...webAuthEffects,
  ]);
};