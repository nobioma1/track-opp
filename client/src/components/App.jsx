import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactGA from 'react-ga';

import Header from './Header';
import Dashboard from './Dashboard';
import Applications from './Applications';
import Landing from './Landing';
import { getUser } from '../actions/auth';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  ReactGA.initialize(process.env.REACT_APP_TRACKING_CODE);
  ReactGA.pageview(window.location.pathname + window.location.search);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Landing} />
      <PrivateRoute path="/dash" component={Dashboard} />
      <PrivateRoute path="/applications" component={Applications} />
      <Route render={() => <Redirect to="/dash" />} />
    </Router>
  );
};

export default App;
