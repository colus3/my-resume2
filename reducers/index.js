import { combineReducers } from 'redux';
import resume from './resume';
import session from './session';

const rootReducer = combineReducers({
  resume,
  session,
});

export default rootReducer;
