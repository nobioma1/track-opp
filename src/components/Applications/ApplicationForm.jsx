import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addApplication, editApplication } from '../../actions/applications';

const INITIAL_VALUES = {
  jobTitle: '',
  companyName: '',
  jobDescription: '',
};

const InputField = ({ id, label, ...rest }) => {
  return (
    <React.Fragment>
      <label
        className="block uppercase text-gray-700 text-xm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        {...rest}
      />
    </React.Fragment>
  );
};

const ApplicationForm = ({ application, closeEdit }) => {
  const [fieldValues, setFieldValues] = useState(application || INITIAL_VALUES);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const onChangeHandler = event => {
    if (error) {
      setError('');
    }
    const target = event.target;
    setFieldValues(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addApplication(fieldValues, () => dispatch(setFieldValues(INITIAL_VALUES)));
    if (fieldValues.jobTitle && fieldValues.companyName) {
      if (!application) {
        dispatch(
          addApplication(fieldValues, () => setFieldValues(INITIAL_VALUES))
        );
      } else {
        dispatch(
          editApplication(fieldValues, () => {
            setFieldValues(INITIAL_VALUES);
            closeEdit(false);
          })
        );
      }
    } else {
      setError('Job Title and Company Name Fields are required');
    }
  };

  return (
    <div className="mt-1">
      {!application && (
        <h2 className="block uppercase text-xl mb-2 text-gray-700 font-bold">
          Record A New Application
        </h2>
      )}
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
        <InputField
          label="Job Title"
          id="grid-job-title"
          name="jobTitle"
          type="text"
          placeholder="Full-Stack Engineer"
          value={fieldValues.jobTitle}
          onChange={onChangeHandler}
        />
        <InputField
          label="Company Name"
          id="grid-company-name"
          name="companyName"
          type="text"
          placeholder="Peng, NG"
          value={fieldValues.companyName}
          onChange={onChangeHandler}
        />
        <label
          className="block uppercase text-gray-700 text-xm font-bold mb-2"
          htmlFor="grid-job-description"
        >
          Job Description
        </label>
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-job-description"
          name="jobDescription"
          rows={application ? '4' : '8'}
          placeholder="More about the Job"
          value={fieldValues.jobDescription}
          onChange={onChangeHandler}
        />
        <p className="mb-1 text-red-400">{error}</p>
        <button
          type="submit"
          className="bg-blue-500 w-full md:w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          {application ? 'Save Changes' : 'Add New Application'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
