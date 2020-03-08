import React from 'react';

import DashboardCounts from './DashboardCounts';
import ApplicationForm from '../Applications/ApplicationForm';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <DashboardCounts />
      <ApplicationForm />
    </div>
  );
};

export default Dashboard;
