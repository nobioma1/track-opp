import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnAuthenticatedRoutes from './UnAuthenticatedRoutes';

const isLoggedIn = false;

const AppRoute = () => {
  if (!isLoggedIn) {
    return <UnAuthenticatedRoutes />;
  }

  return <AuthenticatedRoutes />;
};

export default AppRoute;
