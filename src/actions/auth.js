import { firebaseAuth } from '../config/firebase';
import { getApplications } from './applications';

export const SET_LOGIN = 'SET_LOGIN';

export const getUser = () => dispatch => {
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
