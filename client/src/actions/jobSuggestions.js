import axios from 'axios';
import { API_URL } from '../config';

export const START_SUGGESTIONS_REQUEST = 'START_SUGGESTIONS_REQUEST';
export const SET_SUGGESTIONS = 'SET_SUGGESTIONS';
export const END_SUGGESTIONS_REQUEST = 'END_SUGGESTIONS_REQUEST';

export const getSuggestions = () => async dispatch => {
  try {
    const { data } = await axios.get(`${API_URL}/suggestions`);
  } catch (error) {}
};

export const saveToSuggestions = info => async dispatch => {
  try {
    const { data } = await axios.post(`${API_URL}/suggestions`, { info });
  } catch (error) {}
};
