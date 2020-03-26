import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Fields from './Fields';
import Suggestions from './Suggestions';

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full mb-8">
      <Fields />
      <Suggestions />
    </div>
  );
};

export default Sidebar;
