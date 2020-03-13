import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ApplicationItem from './ApplicationItem';
import ApplicationsNav from './ApplicationsNav';
import Search from '../Search';
import { setCurrentStage, deleteApplication } from '../../actions/applications';
import nodata from '../../assets/nodata.svg';
import { filterApplications } from './filterApplications';

const Applications = () => {
  const [active, setActive] = useState('jobsApplied');
  const [searchParam, setSearchParam] = useState('');

  const { applications, counts } = useSelector(({ applicationsReducer }) => ({
    counts: applicationsReducer.counts,
    applications: applicationsReducer.applications,
  }));

  const dispatch = useDispatch();

  // Filtering different tabs and search param
  const filteredApplications = filterApplications(
    applications,
    active,
    searchParam
  );

  const updateCurrentStage = (id, value) => {
    dispatch(setCurrentStage(id, value));
  };

  const onDeleteHandler = id => {
    dispatch(deleteApplication(id));
  };

  return (
    <div>
      <Link
        to="/dash"
        className="text-lg text-gray-700 font-medium my-3 hover:text-blue-400"
      >
        &#8249; Back to Home
      </Link>
      <ApplicationsNav
        currentTab={active}
        selectTab={setActive}
        counts={counts}
      />
      <Search searchParam={searchParam} setSearchParam={setSearchParam} />
      <div className="flex flex-col">
        {filteredApplications.length > 0 ? (
          filteredApplications.map(application => (
            <ApplicationItem
              key={application.id}
              application={application}
              updateCurrentStage={updateCurrentStage}
              onDelete={onDeleteHandler}
            />
          ))
        ) : (
          <div className="flex flex-col items-center opacity-50">
            <img
              className="h-full w-2/3"
              src={nodata}
              alt="No data to Display"
            />
            <p className="text-base font-medium text-center">
              <span className="text-xl font-medium">
                "No application to show"
              </span>
              <br />
              Great things never come from comfort zones. Send some applications
              today!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
