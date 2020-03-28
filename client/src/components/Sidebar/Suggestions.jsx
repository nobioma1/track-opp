import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postings } from '../../actions/jobSuggestions';

const Suggestions = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(
    ({ jobSuggestionsReducer }) => jobSuggestionsReducer.suggestions
  );

  // useEffect(() => {
  //   dispatch(postings());
  // }, [dispatch]);

  return (
    <div className="pb-2">
      <h1 className="block uppercase text-xl mb-2 text-gray-700 font-bold">
        Job Suggestions
      </h1>
      {suggestions.length > 0 ? (
        suggestions.map((suggestions, index) => (
          <p className="" key={`${index}=${suggestions}`}>
            {suggestions}
          </p>
        ))
      ) : (
        <p className="text-sm font-medium text-gray-700 text-center">
          There are no suggestions at the moment <br />
          Feature Coming Soon!
        </p>
      )}
    </div>
  );
};

export default Suggestions;
