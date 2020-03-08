import { combineReducers } from 'redux';

import applicationsReducer from './applicationsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  applicationsReducer,
  authReducer,
});

export default rootReducer;
