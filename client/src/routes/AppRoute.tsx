import { useEffect } from 'react';

import { useAuthContext } from 'hooks';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnAuthenticatedRoutes from './UnAuthenticatedRoutes';
import { ApplicationsContextProvider } from 'contexts/ApplicationsContext';
import SplashScreen from 'components/SplashScreen';

const AppRoute = () => {
  const { user, isLoading, userAuthChanged } = useAuthContext();

  useEffect(() => {
    const authListener = userAuthChanged();

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
