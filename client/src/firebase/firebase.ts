import app from 'firebase/app';

import config from '../config';

class Firebase {
  constructor() {
    app.initializeApp(config.firebase);
  }
}

export default Firebase;
