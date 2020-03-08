import { combineReducers } from 'redux';
import applicationsReducer from './applicationsReducer';

const rootReducer = combineReducers({ applicationsReducer });

export default rootReducer;
