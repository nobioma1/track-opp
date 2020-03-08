import React from 'react';

const NavItem = ({ tab, title, isActive, count, onClickFn }) => {
  const activeStyle = isActive
    ? 'bg-blue-500 border-blue-500 hover:bg-blue-700 text-white cursor-pointer'
    : 'border-white hover:border-gray-200 text-blue-500 cursor-pointer';
  const invalidStyle = !count && 'text-gray-400 cursor-not-allowed';
  return (
    <li className="flex-1 mr-2" onClick={() => count && onClickFn(tab)}>
      <p
        className={`text-center text-sm m-1 block border rounded p-1 ${invalidStyle ||
          activeStyle}`}
      >
        {title} ({count})
      </p>
    </li>
  );
};

const ApplicationsNav = ({ currentTab, selectTab, counts }) => {
  return (
    <ul className="flex flex-col mb-4 sm:flex-row">
      <NavItem
        tab="jobsApplied"
        title="Jobs Applied"
        isActive={currentTab === 'jobsApplied'}
        count={counts.jobsApplied}
        onClickFn={selectTab}
      />
      <NavItem
        tab="interviews"
        title="Interviews"
        isActive={currentTab === 'interviews'}
        count={counts.interviews}
        onClickFn={selectTab}
      />
      <NavItem
        tab="offers"
        title="Offers"
        isActive={currentTab === 'offers'}
        count={counts.offers}
        onClickFn={selectTab}
      />
      <NavItem
        tab="noResponse"
        title="No Response"
        isActive={currentTab === 'noResponse'}
        count={counts.noResponse}
        onClickFn={selectTab}
      />
      <NavItem
        tab="notAMatch"
        title="Not a Match"
        isActive={currentTab === 'notAMatch'}
        count={counts.notAMatch}
        onClickFn={selectTab}
      />
    </ul>
  );
};

export default ApplicationsNav;
