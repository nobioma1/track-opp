import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addApplication } from '../../actions/data';

const NewEntry = ({ addApplication }) => {
  const [application, setApplication] = useState({
    jobTitle: '',
    companyName: '',
    jobDescription: '',
  });

  const onChangeHandler = event => {
    const target = event.target;
    setApplication(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (application.jobTitle && application.jobDescription) {
      addApplication(application, () =>
        setApplication({
          jobTitle: '',
          companyName: '',
          jobDescription: '',
        })
      );
    }
  };

  return (
    <div className="mt-8">
      <h2 className="block uppercase text-xl mb-2 text-gray-700 font-bold">
        Record A New Application
      </h2>
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
        <label
          className="block uppercase text-gray-700 text-xm font-bold mb-2"
          htmlFor="grid-job-title"
        >
          Job Title
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-job-title"
          name="jobTitle"
          type="text"
          placeholder="Full-Stack Engineer"
          value={application.jobTitle}
          onChange={onChangeHandler}
        />
        <label
          className="block uppercase text-gray-700 text-xm font-bold mb-2"
          htmlFor="grid-company-name"
        >
          Company Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-company-name"
          name="companyName"
          type="text"
          placeholder="Peng, NG"
          value={application.companyName}
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
          rows="8"
          placeholder="More about the Job"
          value={application.jobDescription}
          onChange={onChangeHandler}
        />
        <button
          type="submit"
          className="bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addApplication })(NewEntry);
