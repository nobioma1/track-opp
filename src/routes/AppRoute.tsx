import React from 'react';
import { Switch, Route } from 'react-router-dom';

import appRoutes from './appRoutes';

export interface IRoute {
  name: string;
  Component: any;
  path: string;
  exact?: boolean;
}

const AppRoute = () => {
  return (
    <Switch>
      {appRoutes.map(({ Component, name, path, ...rest }: IRoute) => (
        <Route key={name} path={path} component={Component} {...rest} />
      ))}
    </Switch>
  );
};

export default AppRoute;
