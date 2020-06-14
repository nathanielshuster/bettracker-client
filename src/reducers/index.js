import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { eventReducer } from './eventReducer';
import { userReducer } from './userReducer';
import { oddsReducer } from './oddsReducer';
import { alertReducer } from './alertReducer';

const rootReducer = combineReducers({
  loadingReducer,
  registerReducer,
  loginReducer,
  eventReducer,
  userReducer,
  oddsReducer,
  alertReducer
});

export default rootReducer;
