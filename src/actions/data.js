import { applicationsRef } from '../firebase';
import { getCounts } from '../utils/getCounts';

export const START_REQUEST = 'START_REQUEST';
export const SET_APPLICATIONS = 'SET_APPLICATIONS';
export const ADD_APPLICATION = 'ADD_APPLICATION';
export const END_REQUEST = 'END_REQUEST';

export const getApplications = () => dispatch => {
  dispatch({ type: START_REQUEST });
  applicationsRef.on('value', snapshot => {
    const data = getCounts(Object.entries(snapshot.val()));
    dispatch({ type: SET_APPLICATIONS, payload: data });
  });
};

export const addApplication = application => dispatch => {
  dispatch({ type: START_REQUEST });
  applicationsRef.push(
    {
      ...application,
      hired: false,
      interview: false,
      offer: false,
      concluded: false,
    },
    () => dispatch({ type: ADD_APPLICATION })
  );
};
