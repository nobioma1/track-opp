import { Application, Count } from 'types';

export interface GetCount {
  applications: Application[];
  counts: Count;
}

const getCount = (snapshotArr: [string, Application][]): GetCount => {
  const applications: Application[] = [];
  const counts: Count = {
    jobsApplied: 0,
    pendingResponse: 0,
    interviews: 0,
    notAMatch: 0,
    offers: 0,
  };
  snapshotArr.forEach(([id, data]) => {
    // application is closed and not hired
    if (data.concluded && !data.hired) {
      counts['notAMatch'] = counts['notAMatch'] += 1;
    }
    // gotten an offer for an application
    if (data.offer) {
      counts['offers'] = counts['offers'] += 1;
    }
    // gotten to interview stage for an interview
    if (data.interview) {
      counts['interviews'] = counts['interviews'] += 1;
    }
    // No response at all yet
    if (!data.hired && !data.concluded && !data.interview && !data.offer) {
      counts['pendingResponse'] = counts['pendingResponse'] += 1;
    }
    // add an application data to applications array
    // and include the id in data object
    applications.push({ ...data, id });
  });

  return {
    applications,
    counts: {
      ...counts,
      jobsApplied: applications.length,
    },
  };
};

export default getCount;
