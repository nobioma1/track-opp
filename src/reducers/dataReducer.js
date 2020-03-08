import {
  SET_APPLICATIONS,
  START_REQUEST,
  END_REQUEST,
  ADD_APPLICATION,
} from '../actions/data';

// const INITIAL_STATE = {
//   isLoading: false,
//   applications: [],
//   counts: {
//     noResponse: 0,
//     interviews: 0,
//     notAMatch: 0,
//     offers: 0,
//     jobsApplied: 0,
//   },
// };

const INITIAL_STATE = {
  isLoading: false,
  applications: [
    {
      companyName: 'Peng',
      concluded: false,
      hired: false,
      interview: false,
      jobDescription: 'More about the Job',
      jobTitle: 'Software Engineer',
      offer: false,
      id: '-M1pY-RFr0jHm_eEcEfF',
    },
    {
      companyName: 'SimpleIcons',
      concluded: true,
      hired: false,
      interview: true,
      jobDescription: 'Descriotion',
      jobTitle: 'FullStack Engineer',
      offer: false,
      id: '-M1pY89mQxCzxWgcN_e1',
    },
    {
      companyName: 'Peng Industries',
      concluded: false,
      hired: false,
      interview: false,
      jobDescription: 'Tunde\n\nFriday',
      jobTitle: 'Frontend Engineer',
      offer: false,
      id: '-M1pYK-tZ-LyKFzDBs0s',
    },
    {
      companyName: 'BuyCoins',
      concluded: true,
      hired: false,
      interview: false,
      jobDescription: 'Sexist Mofos',
      jobTitle: 'Backend Engineer',
      offer: false,
      id: '-M1pYTkEfHpPHonU8803',
    },
    {
      companyName: 'BuyPower',
      concluded: false,
      hired: false,
      interview: true,
      jobDescription: 'Something like that',
      jobTitle: 'Support Engineer',
      offer: false,
      id: '-M1pY_h_VGoRKavAqVAx',
    },
    {
      companyName: 'Software Engineer',
      concluded: true,
      hired: true,
      interview: true,
      jobDescription: 'Cool place',
      jobTitle: 'Andela',
      offer: true,
      id: '-M1pYz4C_ublBrSedHdr',
    },
    {
      companyName: ' My Company',
      concluded: true,
      hired: true,
      interview: true,
      jobDescription: 'Some info',
      jobTitle: 'New Job',
      offer: true,
      id: '-M1qfH6FHUiyA7Tx6k4l',
    },
  ],
  counts: {
    noResponse: 2,
    interviews: 4,
    notAMatch: 2,
    offers: 2,
    jobsApplied: 7,
  },
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_REQUEST:
      return { ...state, isLoading: true };
    case SET_APPLICATIONS:
      return { ...state, isLoading: false, ...action.payload };
    case ADD_APPLICATION:
      return { ...state, isLoading: false };
    case END_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default dataReducer;
