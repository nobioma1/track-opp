import React from 'react';

import DashboardCounts from './DashboardCounts';
import NewEntry from './NewEntry';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <DashboardCounts />
      <NewEntry />
    </div>
  );
};

export default Dashboard;
