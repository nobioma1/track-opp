import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import pwrbtn from '../assets/pwrbtn.svg';
import { Logout } from '../actions/auth';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ authReducer }) => authReducer.user);

  return (
    <div className="fixed z-40 w-full bg-blue-500 py-2 px-2 lg:px-6 flex items-center justify-between">
      <Link to="/" className="text-2xl font-extrabold text-white">
        TrackOpp
      </Link>
      {user && (
        <div className="flex">
          <div
            className="text-sm transition duration-500 ease-in-out flex items-center p-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-500 hover:bg-red-500 lg:mt-0 cursor-pointer mx-2"
            onClick={() => dispatch(Logout())}
          >
            <p className="mr-1">{user && user.displayName.split(' ')[0]}</p>
            <img className="w-5 opacity-2" src={pwrbtn} alt="logout button" />
          </div>
          <img
            className="w-10 rounded-full"
            src={user.photoURL}
            alt="user avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
