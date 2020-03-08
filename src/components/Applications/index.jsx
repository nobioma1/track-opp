import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ApplicationsNav from './ApplicationsNav';
import { setCurrentStage, deleteApplication } from '../../actions/applications';
import ApplicationItem from './ApplicationItem';

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
        {filteredApplications.map(application => (
          <ApplicationItem
            key={application.id}
            application={application}
            updateCurrentStage={updateCurrentStage}
            onEdit={onEditHandler}
            onDelete={onDeleteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Applications;
