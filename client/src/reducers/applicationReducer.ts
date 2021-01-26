import { Application, Count } from 'types';

export enum ApplicationActionType {
  SET_APPLICATIONS = 'SET_APPLICATIONS',
  START_APPLICATION_REQUEST = 'START_APPLICATION_REQUEST',
  END_APPLICATION_REQUEST = 'END_APPLICATION_REQUEST',
  ADD_APPLICATION = 'ADD_APPLICATION',
}

export interface IAPPLICATIONS_STATE {
  isLoading: boolean;
  applications: Application[];
  counts: Count;
}

export const APPLICATIONS_STATE: IAPPLICATIONS_STATE = {
  isLoading: false,
  applications: [],
  counts: {
    pendingResponse: 0,
    interviews: 0,
    notAMatch: 0,
    offers: 0,
    jobsApplied: 0,
  },
};

const applicationsReducer = (state: IAPPLICATIONS_STATE, action: any) => {
  switch (action.type) {
    case ApplicationActionType.START_APPLICATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ApplicationActionType.SET_APPLICATIONS:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    case ApplicationActionType.ADD_APPLICATION:
      return {
        ...state,
        isLoading: false,
      };
    case ApplicationActionType.END_APPLICATION_REQUEST:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default applicationsReducer;
