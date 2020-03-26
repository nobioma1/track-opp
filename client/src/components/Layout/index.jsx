import React from 'react';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="antialiased mx-auto flex flex-col md:flex-row pt-24 px-2 md:max-w-6xl">
      <div className="md:w-2/3 mb-5">{children}</div>
      <div className="md:w-1/3 md:pl-8">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
