import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getFields,
  subscribe,
  unsubscribe,
} from '../../actions/jobSuggestions';
import tick from '../../assets/tick.svg';

const Fields = () => {
  const dispatch = useDispatch();
  const fields = useSelector(
    ({ jobSuggestionsReducer }) => jobSuggestionsReducer.fields
  );

  useEffect(() => {
    dispatch(getFields());
  }, [dispatch]);

  return (
    <div className="border-b-2 pb-2">
      <h1 className="block uppercase text-md mb-2 text-gray-700 font-bold">
        Subscribe
      </h1>
      {fields.length > 0 ? (
        fields.map((field, index) => (
          // font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle my-1 cursor-pointer hover:border-2 hover:border-green-800
          <p
            className="flex justify-between text-sm transition duration-500 ease-in-out font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle my-1 cursor-pointer hover:border-2 hover:border-green-800"
            onClick={() =>
              field.subscribed
                ? dispatch(unsubscribe(field.name))
                : dispatch(subscribe(field.name))
            }
            key={`${index}=${field.name}`}
          >
            {field.name}
            {field.subscribed && (
              <span>
                <img src={tick} alt={`${field} is subscribed`} />
              </span>
            )}
          </p>
        ))
      ) : (
        <p className="text-sm font-medium text-gray-700 text-center">
          There are no fields at the moment
        </p>
      )}
    </div>
  );
};

export default Fields;
