import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthPageLayout } from '../components/layouts';
import {
  CreateAccount,
  ForgotPassword,
  Login,
  ResetPassword,
} from '../components/Auth';

const UnAuthenticatedRoutes = () => {
  return (
    <AuthPageLayout>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/create-account">
          <CreateAccount />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </AuthPageLayout>
  );
};

export default UnAuthenticatedRoutes;
