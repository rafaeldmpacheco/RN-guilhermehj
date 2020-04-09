import { combineReducers } from 'redux';

import auth from './authentication';
import dishes from './dishes';

export const reducers = combineReducers({
  auth,
  dishes,
});

