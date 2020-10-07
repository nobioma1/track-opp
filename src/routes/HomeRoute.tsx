import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppRoutes } from '../consts';
import DashboardPage from '../pages/home/DashboardPage';

const HomeRoute = () => {
  return (
    <Switch>
      <Route path={AppRoutes.dashboard} component={DashboardPage} exact />
    </Switch>
  );
};

export default HomeRoute;
