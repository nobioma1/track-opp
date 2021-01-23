const config = {
  firebase: {
    apiKey: process.env.REACT_APP_API_KEY,
    appId: process.env.REACT_APP_APP_ID,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  },
  urls: {
    appUrl: process.env.REACT_APP_API_URL,
  },
  googleAnalytics: process.env.REACT_APP_TRACKING_CODE,
};

export default config;
