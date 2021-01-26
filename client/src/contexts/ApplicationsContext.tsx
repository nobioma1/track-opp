import React, { useReducer, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { useAuthContext, useFirebaseContext } from 'hooks';
import { Application } from 'types';
import applicationsReducer, {
  ApplicationActionType,
  APPLICATIONS_STATE,
  IAPPLICATIONS_STATE,
} from 'reducers/applicationReducer';

type EditingApplication = Application | null;

interface ApplicationsContextValue {
  getApplications(): void;
  dailyGoal?: number;
  state: IAPPLICATIONS_STATE;
  drawerIsOpen: boolean;
  drawerOnClose(): void;
  editing: EditingApplication;
  drawerOnOpen(a?: EditingApplication): void;
}

const ApplicationsContext = React.createContext<ApplicationsContextValue>(
  null!
);

export const ApplicationsContextProvider: React.FC = ({ children }) => {
  const [editing, setEditing] = useState<EditingApplication>(null);
  const [state, dispatch] = useReducer(applicationsReducer, APPLICATIONS_STATE);
  const { user } = useAuthContext();
  const { getApplications: getCountAndApps } = useFirebaseContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getApplications = () => {
    dispatch({
      type: ApplicationActionType.START_APPLICATION_REQUEST,
    });
    getCountAndApps((result) => {
      dispatch({
        type: ApplicationActionType.SET_APPLICATIONS,
        payload: result,
      });
    });
  };

  return (
    <ApplicationsContext.Provider
      value={{
        state,
        editing,
        dailyGoal: user?.dailyGoal,
        getApplications,
        drawerIsOpen: isOpen,
        drawerOnOpen: (application) => {
          if (application) {
            setEditing(application);
          }
          onOpen();
        },
        drawerOnClose: () => {
          onClose();
          setEditing(null);
        },
      }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

export default ApplicationsContext;
