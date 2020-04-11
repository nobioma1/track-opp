import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostings } from '../../actions/jobPosting';
import Post from './Post';

const Postings = () => {
  const dispatch = useDispatch();
  const { subscribedPostings: postings, source } = useSelector(
    ({ jobPostingReducer }) => jobPostingReducer
  );

  useEffect(() => {
    dispatch(getPostings());
  }, [dispatch]);

  return (
    <div className="pb-2">
      <h1 className="block uppercase text-xl mb-2 text-gray-700 font-bold">
        Job Postings
      </h1>

      {postings.length ? (
        postings.map((posting, index) => (
          <Post key={`${index}=${posting}`} posting={posting} />
        ))
      ) : (
        <p className="text-sm font-medium text-gray-700 text-center">
          There are no job postings{' '}
          <span role="img" aria-label="empty">
            📭
          </span>
        </p>
      )}
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
  );
};

export default Postings;
