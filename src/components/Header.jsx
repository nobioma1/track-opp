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
        <div className="flex items-center">
          <Link
            to="/applications"
            className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
          >
            Applications
          </Link>
          <div
            className="w-6 opacity-2 cursor-pointer ml-2"
            onClick={() => dispatch(Logout())}
          >
            <img className="w-full" src={pwrbtn} alt="logout button" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
