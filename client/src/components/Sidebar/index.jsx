import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSuggestions } from '../../actions/jobSuggestions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(
    ({ jobSuggestionsReducer }) => jobSuggestionsReducer.suggestions
  );

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch]);

  return (
    <div className="w-full mb-8">
      <h1 className="block uppercase text-xl mb-2 text-gray-700 font-bold">
        Job Suggestions
      </h1>
      <div>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => <p>{suggestion}</p>)
        ) : (
          <p className="text-sm font-medium text-gray-700 text-center">
            There are no suggestions at the moment
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
