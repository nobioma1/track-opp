import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostings } from '../../actions/jobPosting';

const Postings = () => {
  const dispatch = useDispatch();
  const { postings, source } = useSelector(({ jobPostingReducer }) => ({
    postings: jobPostingReducer.subscribedPostings,
    source: jobPostingReducer.source,
  }));

  useEffect(() => {
    dispatch(getPostings());
  }, [dispatch]);

  return (
    <div className="pb-2">
      <h1 className="block uppercase text-xl mb-2 text-gray-700 font-bold">
        Job Postings
      </h1>

      {postings.length > 0 ? (
        <div>
          {postings.map((posting, index) => (
            <div
              className="border rounded text-gray-700 outline-none my-3 p-2"
              key={`${index}=${posting}`}
            >
              <a href={posting.link} target="__blank">
                <p className="font-bold">
                  {posting.position}{' '}
                  {posting.remoteOrLocal.toLowerCase() === 'remote' && (
                    <span>({posting.remoteOrLocal})</span>
                  )}
                </p>
                <p>
                  {posting.company}, {posting.country}
                </p>
                <div>
                  <p></p>
                  <p>{posting.fullTimeOrPartTime}</p>
                  <p>{posting.experience}</p>
                  <p>{posting.languages}</p>
                </div>
              </a>
            </div>
          ))}
          {source && (
            <a
              href={source.link}
              target="__blank"
              className="text-blue-500 text-sm"
            >
              For more, visit {source.name} <br /> ({source.lastUpdated})
            </a>
          )}
        </div>
      ) : (
        <p className="text-sm font-medium text-gray-700 text-center">
          click on the job fields above to subscribe 💡
        </p>
      )}
    </div>
  );
};

export default Postings;
