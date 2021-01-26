import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthPageLayout } from 'layouts';
import { CreateAccount, ForgotPassword, Login } from 'components/Auth';

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
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </AuthPageLayout>
  );
};

export default UnAuthenticatedRoutes;
