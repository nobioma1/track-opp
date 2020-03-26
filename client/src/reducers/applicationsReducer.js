import {
  SET_APPLICATIONS,
  START_APPLICATION_REQUEST,
  END_APPLICATION_REQUEST,
  ADD_APPLICATION,
} from '../actions/applications';

export const INITIAL_STATE = {
  isLoading: false,
  applications: [],
  counts: {
    noResponse: 0,
    interviews: 0,
    notAMatch: 0,
    offers: 0,
    jobsApplied: 0,
  },
};

const applicationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_APPLICATION_REQUEST:
      return { ...state, isLoading: true };
    case SET_APPLICATIONS:
      return { ...state, isLoading: false, ...action.payload };
    case ADD_APPLICATION:
      return { ...state, isLoading: false };
    case END_APPLICATION_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default applicationsReducer;
