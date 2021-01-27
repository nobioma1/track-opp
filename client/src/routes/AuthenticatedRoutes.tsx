import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppLayout } from 'layouts';
import Profile from 'components/Profile';
import Dashboard from 'components/Dashboard';
import { Applications } from 'components/Application';
import { useApplicationsContext } from 'hooks';

const AuthenticatedRoutes = () => {
  const { getApplications } = useApplicationsContext();

  useEffect(() => {
    getApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppLayout>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/applications" exact>
          <Applications />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default AuthenticatedRoutes;
