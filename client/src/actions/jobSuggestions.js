import axios from 'axios';
import { API_URL } from '../config';
import { firebaseAuth } from '../config/firebase';

export const START_SUGGESTIONS_REQUEST = 'START_SUGGESTIONS_REQUEST';
export const SET_SUGGESTIONS = 'SET_SUGGESTIONS';
export const END_SUGGESTIONS_REQUEST = 'END_SUGGESTIONS_REQUEST';
export const SET_FIELDS = 'SET_FIELDS';

export const getFields = () => async dispatch => {
  const userId = firebaseAuth().currentUser.uid;
  try {
    const { data } = await axios.get(`${API_URL}/fields/${userId}`);
    dispatch({ type: SET_FIELDS, payload: data.fields });
  } catch (error) {}
};

export const subscribe = field => async dispatch => {
  const userId = firebaseAuth().currentUser.uid;
  try {
    await axios.post(`${API_URL}/subscribe/${userId}`, {
      field,
    });
    dispatch(getFields());
  } catch (error) {}
};

export const unsubscribe = field => async dispatch => {
  const userId = firebaseAuth().currentUser.uid;
  try {
    await axios.post(`${API_URL}/unsubscribe/${userId}`, {
      field,
    });
    dispatch(getFields());
  } catch (error) {}
};
