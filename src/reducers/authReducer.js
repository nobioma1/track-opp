import { SET_LOGIN } from '../actions/auth';

export const INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
