import { combineReducers } from 'redux';

import applicationsReducer from './applicationsReducer';
import authReducer from './authReducer';
import jobPostingReducer from './jobPostingReducer';

const rootReducer = combineReducers({
  applicationsReducer,
  authReducer,
  jobPostingReducer,
});

export default rootReducer;
