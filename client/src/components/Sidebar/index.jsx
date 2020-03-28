import React from 'react';
import Fields from './Fields';
import Suggestions from './Suggestions';

const Sidebar = () => {
  return (
    <div className="w-full mb-8">
      <Fields />
      <Suggestions />
    </div>
  );
};

export default Sidebar;
