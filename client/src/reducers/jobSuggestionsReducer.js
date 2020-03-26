import {
  START_SUGGESTIONS_REQUEST,
  SET_SUGGESTIONS,
  END_SUGGESTIONS_REQUEST,
} from '../actions/jobSuggestions';

export const INITIAL_STATE = {
  isLoading: false,
  suggestions: [],
};

const jobSuggestionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_SUGGESTIONS_REQUEST:
      return { ...state, isLoading: true };
    case SET_SUGGESTIONS:
      return { ...state, isLoading: false, suggestions: action.payload };
    case END_SUGGESTIONS_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default jobSuggestionsReducer;
