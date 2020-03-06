import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ApplicationsNav from './ApplicationsNav';

const Applications = () => {
  const [active, setActive] = useState('jobsApplied');
  const { applications, counts } = useSelector(({ dataReducer }) => ({
    counts: dataReducer.counts,
    applications: dataReducer.applications,
  }));

  const filteredApplications = applications.filter(application => {
    switch (active) {
      case 'interviews':
        return application.interview;
      case 'offers':
        return application.offers;
      case 'noResponse':
        return (
          !application.hired &&
          !application.concluded &&
          !application.interview &&
          !application.offer
        );
      case 'notAMatch':
        return application.concluded && !application.hired;
      default:
        return true;
    }
  });

  return (
    <div>
      <ApplicationsNav
        currentTab={active}
        selectTab={setActive}
        counts={counts}
      />
      <div className="lg:flex">
        <div className="m-2">
          {filteredApplications.map(application => (
            <div
              key={application.id}
              className="border-t border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal my-2"
            >
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {application.jobTitle}
              </div>
              <p className="text-gray-700 text-base">
                {application.jobDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
