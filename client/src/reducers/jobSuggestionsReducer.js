import {
  START_SUGGESTIONS_REQUEST,
  SET_FIELDS,
  END_SUGGESTIONS_REQUEST,
} from '../actions/jobSuggestions';

export const INITIAL_STATE = {
  isLoading: false,
  fields: [],
  suggestions: [],
};

const jobSuggestionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_SUGGESTIONS_REQUEST:
      return { ...state, isLoading: true };
    case SET_FIELDS:
      return { ...state, isLoading: false, fields: action.payload };
    case END_SUGGESTIONS_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default jobSuggestionsReducer;
