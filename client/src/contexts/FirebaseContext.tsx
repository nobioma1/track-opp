import React from 'react';

import Firebase from '../firebase';

const FirebaseContext = React.createContext<Firebase>(null!);

export const FirebaseContextProvider: React.FC = ({ children }) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
