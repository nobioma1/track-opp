import {
  SET_APPLICATIONS,
  START_REQUEST,
  END_REQUEST,
  ADD_APPLICATION,
} from '../actions/data';

const INITIAL_STATE = {
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

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_REQUEST:
      return { ...state, isLoading: true };
    case SET_APPLICATIONS:
      return { ...state, isLoading: false, ...action.payload };
    case ADD_APPLICATION:
      return { ...state, isLoading: false };
    case END_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default dataReducer;
