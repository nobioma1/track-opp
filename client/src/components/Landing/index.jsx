import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { firebaseUIConfig, firebaseAuth } from '../../config/firebase';
import interview from '../../assets/interview.svg';
import typing from '../../assets/typing.svg';
import plan from '../../assets/plan.svg';

const Landing = () => {
  const { user } = useSelector(({ authReducer }) => authReducer);

  return !user ? (
    <div className="text-gray-700 bg-white">
      <div
        className="min-h-64 pt-32 pb-20"
        style={{
          background:
            'linear-gradient(264deg, rgba(48,42,150,1) 0%, rgba(90,154,208,1) 25%, rgba(66,153,225,1) 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Keep track of the progress on your job applications!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Getting a job can be tough, tracking your applications should not.
          </h3>
          <StyledFirebaseAuth
            uiConfig={firebaseUIConfig}
            firebaseAuth={firebaseAuth()}
            disabled={true}
          />
        </div>
      </div>
      <section className="container mx-auto px-6 p-10">
        <div className="flex items-center flex-wrap mb-5">
          <div className="w-full md:w-1/2">
            <img src={typing} alt="Sending new application" />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 ">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Add new job applications
            </h4>
            <p className="text-gray-600 mb-8">
              Be consistent. Send your job applications and keep track of the
              applications you sent. You can add and view job applications
              anywhere and at anytime on TrackOpp.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-5">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img src={plan} alt="Interview" />
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Change job application state
            </h4>
            <p className="text-gray-600 mb-8">
              Before getting a job, there are different stages you undergo. You
              can change the state of the job application between Reviewing,
              Interview, Offer, A Match and Not a Match as you progress through
              the job application stages.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img src={interview} alt="Interviewing" />
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Stay Organized
            </h4>
            <p className="text-gray-600 mb-8">
              You can increase your productivity by being organized, you will
              save time looking for things and will have more time to work on
              important tasks like sending out new applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <Redirect to="/dash" />
  );
};

export default Landing;
