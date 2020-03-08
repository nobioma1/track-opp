import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
  }, []);

  return (
    <Router>
      <Header />
      <div className="container max-w-4xl mx-auto pt-16 pb-8 px-2">
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/applications" component={Applications} />
      </div>
    </Router>
  );
};

export default App;
