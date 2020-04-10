import React from 'react';
import Fields from './Fields';
import Postings from './Postings';

const Sidebar = () => {
  return (
    <div className="w-full mb-8">
      <Fields />
      <Postings />
    </div>
  );
};

export default Sidebar;
