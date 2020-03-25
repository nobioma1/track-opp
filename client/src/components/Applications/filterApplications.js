const sortTabs = (applications, active) => {
  const sorted = applications.filter(application => {
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

  return sorted;
};

export const filterApplications = (applications, active, searchParam) => {
  const sortedApplicationsTabs = sortTabs(applications, active);
  const filteredSearch = [];
  const fields = ['jobTitle', 'companyName'];

  if (searchParam.length > 2) {
    sortedApplicationsTabs.forEach(item => {
      const inJobTitle = item[fields[0]]
        .toLowerCase()
        .includes(searchParam.toLowerCase());
      const inCompanyName = item[fields[1]]
        .toLowerCase()
        .includes(searchParam.toLowerCase());

      if (inJobTitle || inCompanyName) {
        filteredSearch.push(item);
      }
    });

    return filteredSearch;
  } else {
    return sortedApplicationsTabs;
  }
};
