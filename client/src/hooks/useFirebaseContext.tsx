import { useContext } from 'react';

import FirebaseContext from 'contexts/FirebaseContext';

export function useFirebaseContext() {
  const context = useContext(FirebaseContext);

  if (!context) {
    throw new Error(
      'FirebaseContext must be used within a FirebaseContextProvider'
    );
  }

  return context;
}
