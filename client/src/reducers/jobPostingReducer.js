import {
  START_POSTINGS_REQUEST,
  SET_FIELDS,
  END_POSTINGS_REQUEST,
  SET_POSTINGS,
} from '../actions/jobPosting';

export const INITIAL_STATE = {
  isLoading: false,
  fields: [],
  subscribedPostings: [],
  source: null,
};

const jobPostingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_POSTINGS_REQUEST:
      return { ...state, isLoading: true };
    case SET_FIELDS:
      return { ...state, isLoading: false, fields: action.payload };
    case END_POSTINGS_REQUEST:
      return { ...state, isLoading: false };
    case SET_POSTINGS: {
      return {
        ...state,
        isLoading: false,
        subscribedPostings: action.payload.subscribedPostings,
        source: action.payload.source,
      };
    }
    default:
      return state;
  }
};

export default jobPostingReducer;
