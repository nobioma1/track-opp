import { SET_LOGIN, LOGIN_REQUEST } from '../actions/auth';

export const INITIAL_STATE = {
  isLoading: false,
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case SET_LOGIN:
      return { ...state, isLoading: false, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
