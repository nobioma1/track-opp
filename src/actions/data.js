import { applicationsRef } from '../config/firebase';
import { getCounts } from '../utils/getCounts';

export const START_REQUEST = 'START_REQUEST';
export const SET_APPLICATIONS = 'SET_APPLICATIONS';
export const ADD_APPLICATION = 'ADD_APPLICATION';
export const END_REQUEST = 'END_REQUEST';

export const getApplications = () => dispatch => {
  dispatch({ type: START_REQUEST });
  applicationsRef.on('value', snapshot => {
    if (snapshot.val()) {
      const data = getCounts(Object.entries(snapshot.val()));
      dispatch({ type: SET_APPLICATIONS, payload: data });
    }
  });
};

export const addApplication = (application, onCompleteFn) => dispatch => {
  dispatch({ type: START_REQUEST });
  applicationsRef.push(
    {
      ...application,
      hired: false,
      interview: false,
      offer: false,
      concluded: false,
    },
    () => {
      dispatch({ type: ADD_APPLICATION });
      onCompleteFn();
    }
  );
};

export const setCurrentStage = (id, value) => dispatch => {
  // object to hold changes to be made
  dispatch({ type: START_REQUEST });
  const newUpdate = {};
  switch (value) {
    case 'review':
      newUpdate[`${id}/interview`] = false;
      newUpdate[`${id}/offer`] = false;
      newUpdate[`${id}/hired`] = false;
      newUpdate[`${id}/concluded`] = false;
      break;
    case 'interview':
      newUpdate[`${id}/interview`] = true;
      newUpdate[`${id}/offer`] = false;
      newUpdate[`${id}/hired`] = false;
      newUpdate[`${id}/concluded`] = false;
      break;
    case 'offer':
      newUpdate[`${id}/concluded`] = false;
      newUpdate[`${id}/hired`] = false;
      newUpdate[`${id}/offer`] = true;
      break;
    case 'notAMatch':
      newUpdate[`${id}/concluded`] = true;
      newUpdate[`${id}/hired`] = false;
      break;
    case 'accept':
      newUpdate[`${id}/offer`] = true;
      newUpdate[`${id}/concluded`] = true;
      newUpdate[`${id}/hired`] = true;
      break;
    default:
      break;
  }
  // update reference
  applicationsRef.update(newUpdate, () => dispatch({ type: END_REQUEST }));
};
