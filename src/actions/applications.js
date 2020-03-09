import { databaseRef, timestamp, firebaseAuth } from '../config/firebase';
import { getCounts } from '../utils/getCounts';
import { INITIAL_STATE } from '../reducers/applicationsReducer';

export const START_REQUEST = 'START_REQUEST';
export const SET_APPLICATIONS = 'SET_APPLICATIONS';
export const ADD_APPLICATION = 'ADD_APPLICATION';
export const END_REQUEST = 'END_REQUEST';

export const getApplications = () => dispatch => {
  dispatch({ type: START_REQUEST });
  databaseRef
    .child(`${firebaseAuth().currentUser.uid}/applications`)
    .on('value', snapshot => {
      if (snapshot.val()) {
        const objectArr = Object.entries(snapshot.val()).reverse();
        const data = getCounts(objectArr);
        dispatch({ type: SET_APPLICATIONS, payload: data });
      } else {
        dispatch({ type: SET_APPLICATIONS, payload: INITIAL_STATE });
      }
    });
};

export const addApplication = (application, onCompleteFn) => dispatch => {
  dispatch({ type: START_REQUEST });
  databaseRef.child(`${firebaseAuth().currentUser.uid}/applications`).push(
    {
      ...application,
      hired: false,
      interview: false,
      offer: false,
      concluded: false,
      timestamp,
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
  databaseRef
    .child(`${firebaseAuth().currentUser.uid}/applications`)
    .update(newUpdate, () => dispatch({ type: END_REQUEST }));
};

export const deleteApplication = id => dispatch => {
  dispatch({ type: START_REQUEST });
  databaseRef
    .child(`${firebaseAuth().currentUser.uid}/applications`)
    .child(id)
    .remove(() => dispatch({ type: END_REQUEST }));
};

export const editApplication = (application, onCompleteFn) => dispatch => {
  dispatch({ type: START_REQUEST });

  const id = application.id;

  const newUpdate = {};
  newUpdate[`${id}/jobTitle`] = application.jobTitle;
  newUpdate[`${id}/companyName`] = application.companyName;
  newUpdate[`${id}/jobDescription`] = application.jobDescription;

  // update reference
  databaseRef
    .child(`${firebaseAuth().currentUser.uid}/applications`)
    .update(newUpdate, () => {
      dispatch({ type: END_REQUEST });
      onCompleteFn();
    });
};
