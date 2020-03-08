import { firebaseAuth } from '../config/firebase';
import { getApplications } from './applications';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SET_LOGIN = 'SET_LOGIN';

export const getUser = () => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      dispatch(getApplications(user.uid));
    }
    dispatch({ type: SET_LOGIN, payload: user });
  });
};

export const Logout = () => dispatch => {
  firebaseAuth().signOut();
};
