import { combineReducers } from 'redux';

import applicationsReducer from './applicationsReducer';
import authReducer from './authReducer';
import jobSuggestionsReducer from './jobSuggestionsReducer';

const rootReducer = combineReducers({
  applicationsReducer,
  authReducer,
  jobSuggestionsReducer,
});

export default rootReducer;
