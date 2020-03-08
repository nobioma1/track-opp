import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { firebaseUIConfig, firebaseAuth } from '../../config/firebase';
import interview from '../../assets/interview.svg';

const Login = () => {
  const user = useSelector(({ authReducer }) => authReducer.user);

  return (
    <div className="flex flex-col text-center" style={{ height: '85vh' }}>
      {!user ? (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-3xl font-medium font-mono">
            Keep track of the progress of your job applications... 😎
          </h1>
          <img
            className="h-full w-2/3 md:w-2/4 opacity-30"
            src={interview}
            alt="Interview"
          />
          <StyledFirebaseAuth
            uiConfig={firebaseUIConfig}
            firebaseAuth={firebaseAuth()}
          />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Login;
