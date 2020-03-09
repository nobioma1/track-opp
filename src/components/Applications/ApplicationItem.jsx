import React, { useState } from 'react';
import moment from 'moment';

import ApplicationForm from './ApplicationForm';

const ApplicationItem = ({ application, updateCurrentStage, onDelete }) => {
  const [isEdit, setEdit] = useState(false);

  return (
    <div
      key={application.id}
      className="border border-gray-400 bg-white rounded p-2 md:p-4 flex flex-col justify-between leading-normal my-2"
    >
      <div className="flex justify-between md:justify-end mb-1">
        <p className="text-sm text-gray-600 mr-1 flex items-center">
          <svg
            className="fill-current text-gray-500 w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path d="M61.33,58.67H7l9.9-19.8L30.29,50.05a2.67,2.67,0,0,0,4-.68L50,23.24l1.31,4.09a2.67,2.67,0,0,0,2.54,1.86,2.54,2.54,0,0,0,.81-.13,2.68,2.68,0,0,0,1.73-3.35L53,15.34a2.66,2.66,0,0,0-3.35-1.73L39.53,16.84a2.67,2.67,0,0,0,1.62,5.08l4.19-1.33L31.32,44,17.71,32.62a2.68,2.68,0,0,0-4.1.85L5.33,50V2.67A2.67,2.67,0,1,0,0,2.67V61.33a3.49,3.49,0,0,0,.07.37,2.62,2.62,0,0,0,.12.57,2.76,2.76,0,0,0,.25.44,2.79,2.79,0,0,0,.28.42,2.58,2.58,0,0,0,.45.35,2.25,2.25,0,0,0,.3.24l.11,0,.15.05a2.58,2.58,0,0,0,.93.19H61.33a2.67,2.67,0,1,0,0-5.33Z" />
          </svg>
          Current Stage:
        </p>
        <div className="flex">
          <select
            className={`border rounded text-gray-700 outline-none ${
              application.offer && application.concluded
                ? 'border-green-500'
                : !application.offer && application.concluded
                ? 'border-red-300'
                : 'border-teal-200'
            }`}
            value={
              application.offer && !application.concluded
                ? 'offer'
                : application.interview && !application.concluded
                ? 'interview'
                : application.concluded && !application.offer
                ? 'notAMatch'
                : application.offer && application.concluded
                ? 'accept'
                : 'review'
            } // Revise Logic
            onChange={e => updateCurrentStage(application.id, e.target.value)}
          >
            <option value="review">Reviewing</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="accept">A Match</option>
            <option value="notAMatch">Not A Match</option>
          </select>
          <div className="group relative">
            <div className="flex items-center ml-2 mt-1 cursor-pointer">
              <svg
                className="fill-current text-gray-500 w-5 h-5 hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path d="M0,16H16V0H0ZM5.33,5.33h5.34v5.34H5.33Z" />
                <path d="M24,16H40V0H24ZM29.33,5.33h5.34v5.34H29.33Z" />
                <path d="M48,0V16H64V0ZM58.67,10.67H53.33V5.33h5.34Z" />
                <path d="M0,40H16V24H0ZM5.33,29.33h5.34v5.34H5.33Z" />
                <path d="M24,40H40V24H24Zm5.33-10.67h5.34v5.34H29.33Z" />
                <path d="M48,40H64V24H48Zm5.33-10.67h5.34v5.34H53.33Z" />
                <path d="M0,64H16V48H0ZM5.33,53.33h5.34v5.34H5.33Z" />
                <path d="M24,64H40V48H24Zm5.33-10.67h5.34v5.34H29.33Z" />
                <path d="M48,64H64V48H48Zm5.33-10.67h5.34v5.34H53.33Z" />
              </svg>
            </div>
            <div
              className="hidden group-hover:block border mt-0 bg-white rounded absolute"
              style={{ left: '-50px' }}
            >
              <p
                className="px-4 py-2 block text-black hover:bg-blue-300 cursor-pointer"
                onClick={() => (isEdit ? setEdit(false) : setEdit(true))}
              >
                {isEdit ? 'Cancel' : 'Edit'}
              </p>
              <p
                className="px-4 py-2 block text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
                onClick={() => onDelete(application.id)}
              >
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
      {isEdit ? (
        <ApplicationForm
          application={application}
          closeEdit={() => setEdit(false)}
        />
      ) : (
        <React.Fragment>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {application.jobTitle}
          </div>
          <p className="text-gray-700 font-medium text-base">
            {application.companyName}
          </p>
          <p className="text-gray-700 text-base">
            {application.jobDescription}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Added {moment(application.timestamp).fromNow()}
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default ApplicationItem;
