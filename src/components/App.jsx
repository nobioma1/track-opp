import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './Header';
import Dashboard from './Dashboard';
import Applications from './Applications';
import Login from './Auth/Login';
import { getUser } from '../actions/auth';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <div className="container max-w-4xl mx-auto pt-16 pb-8 px-2">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dash" component={Dashboard} />
        <PrivateRoute path="/applications" component={Applications} />
        <Route render={() => <Redirect to="/dash" />} />
      </div>
    </Router>
  );
};

export default App;
