import React from 'react';

const NewEntry = () => {
  return (
    <div className="mt-8">
      <h2 className="block uppercase text-xl mb-2 text-gray-700 font-bold">
        Record A New Application
      </h2>
      <form className="flex flex-col">
        <label
          className="block uppercase text-gray-700 text-xm font-bold mb-2"
          htmlFor="grid-job-title"
        >
          Job Title
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-job-title"
          type="text"
          placeholder="Full-Stack Engineer"
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
          type="text"
          placeholder="Peng, NG"
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
          rows="10"
          placeholder="More about the Job"
        />
        <button className="bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewEntry;
