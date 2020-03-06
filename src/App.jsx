import React from 'react';

import NewEntry from './components/NewEntry';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <React.Fragment>
      <div className="fixed w-full bg-blue-500 p-2">
        <h1 className="text-2xl font-extrabold text-white">Track-Opp</h1>
      </div>
      <div className="container mx-auto pt-16 pb-8 px-3">
        <div className="flex flex-col">
          <Dashboard />
          <NewEntry />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
