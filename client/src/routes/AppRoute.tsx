import { useEffect } from 'react';

import { useAuthContext, useFirebaseContext } from 'hooks';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnAuthenticatedRoutes from './UnAuthenticatedRoutes';
import { ApplicationsContextProvider } from 'contexts/ApplicationsContext';

const AppRoute = () => {
  const { auth, getUserDetails } = useFirebaseContext();
  const { setUser, user } = useAuthContext();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        return setUser({
          ...(await getUserDetails()),
        });
      }
      setUser(null);
    });

    return () => {
      authListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return user ? (
    <ApplicationsContextProvider>
      <AuthenticatedRoutes />
    </ApplicationsContextProvider>
  ) : (
    <UnAuthenticatedRoutes />
  );
};

export default AppRoute;
