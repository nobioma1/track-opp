import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ApplicationsNav from './ApplicationsNav';
import { setCurrentStage, deleteApplication } from '../../actions/applications';
import ApplicationItem from './ApplicationItem';
import nodata from '../../assets/nodata.svg';

const Applications = () => {
  const [active, setActive] = useState('jobsApplied');
  const { applications, counts } = useSelector(({ applicationsReducer }) => ({
    counts: applicationsReducer.counts,
    applications: applicationsReducer.applications,
  }));
  const dispatch = useDispatch();

  // Filtering different tabs
  const filteredApplications = applications.filter(application => {
    switch (active) {
      case 'interviews':
        return application.interview;
      case 'offers':
        return application.offer;
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

  const updateCurrentStage = (id, value) => {
    dispatch(setCurrentStage(id, value));
  };

  const onEditHandler = id => {};

  const onDeleteHandler = id => {
    dispatch(deleteApplication(id));
  };

  return (
    <div>
      <ApplicationsNav
        currentTab={active}
        selectTab={setActive}
        counts={counts}
      />
      <div className="flex flex-col">
        {applications.length > 0 ? (
          filteredApplications.map(application => (
            <ApplicationItem
              key={application.id}
              application={application}
              updateCurrentStage={updateCurrentStage}
              onEdit={onEditHandler}
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
            <p className="text-xl font-medium text-center">
              Great things never come from comfort zones. Make those
              applications now!! <br />
              Let's cause an
              <span className="text-2xl font-bold"> "ApplicationOverflow"</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
