import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DashboardCounts = () => {
  const counts = useSelector(
    ({ applicationsReducer }) => applicationsReducer.counts
  );
  return (
    <div className="rounded p-2 md:p-4 min-h-48 overflow-hidden shadow-lg mb-8 border">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl text-gray-700 uppercase font-bold">Dashboard</h2>
        <Link
          to="/applications"
          className="text-medium transition duration-500 ease-in-out px-4 py-2 leading-none border rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Applications
        </Link>
      </div>
      <div className="flex flex-wrap justify-between px-2">
        <h3 className="flex flex-col-reverse uppercase w-32 items-center">
          Jobs Applied
          <span className="text-5xl font-medium">{counts.jobsApplied}</span>
        </h3>
        <h3 className="flex flex-col-reverse uppercase w-32 items-center">
          Interviews{' '}
          <span className="text-5xl font-medium">{counts.interviews}</span>
        </h3>
        <h3 className="flex flex-col-reverse uppercase w-32 items-center">
          Offers <span className="text-5xl font-medium">{counts.offers}</span>
        </h3>
        <h3 className="flex flex-col-reverse uppercase w-32 items-center">
          No Response{' '}
          <span className="text-5xl font-medium">{counts.noResponse}</span>
        </h3>
        <h3 className="flex flex-col-reverse uppercase w-32 items-center">
          Not a Match{' '}
          <span className="text-5xl font-medium">{counts.notAMatch}</span>
        </h3>
      </div>
    </div>
  );
};

export default DashboardCounts;
