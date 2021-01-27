import { Application } from 'types';

const sortTabs = (applications: Application[], active: string) => {
  const sorted = applications.filter((application) => {
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

const filterApplications = (
  applications: Application[],
  active: string,
  searchParam: string
) => {
  const sortedApplicationsTabs = sortTabs(applications, active);
  const filteredSearch = [] as Application[];

  if (searchParam.length > 2) {
    sortedApplicationsTabs.forEach((item) => {
      //@ts-ignore
      const inJobTitle = item['jobTitle']
        .toLowerCase()
        .includes(searchParam.toLowerCase());

      //@ts-ignore
      const inCompanyName = item['companyName']
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

export default filterApplications;
