import React from 'react';
import NewEntry from './components/NewEntry';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <h1>Track-Opp</h1>
      <div>
        <Dashboard />
        <NewEntry />
      </div>
    </div>
  );
};

export default App;
