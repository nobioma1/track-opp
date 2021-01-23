import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthPageLayout } from '../components/layouts';
import Dashboard from '../components/Dashboard';

const AuthenticatedRoutes = () => {
  return (
    <AuthPageLayout>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </AuthPageLayout>
  );
};

export default AuthenticatedRoutes;
