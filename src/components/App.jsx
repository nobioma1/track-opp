import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './Header';
import Dashboard from './Dashboard';
import Applications from './Applications';
import { getApplications } from '../actions/data';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApplications());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <div className="container max-w-4xl mx-auto pt-16 pb-8 px-2">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/applications" component={Applications} />
      </div>
    </BrowserRouter>
  );
};

export default App;
