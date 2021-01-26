import { useContext } from 'react';

import ApplicationsContext from 'contexts/ApplicationsContext';

export function useApplicationsContext() {
  const context = useContext(ApplicationsContext);

  if (!context) {
    throw new Error(
      'ApplicationsContext must be used within a ApplicationsContextProvider'
    );
  }

  return context;
}
