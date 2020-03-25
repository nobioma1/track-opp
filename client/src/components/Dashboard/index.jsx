import React from 'react';

import ApplicationForm from '../Applications/ApplicationForm';
import DashboardCounts from './DashboardCounts';
import Layout from '../Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <DashboardCounts />
        <ApplicationForm />
      </div>
    </Layout>
  );
};

export default Dashboard;
