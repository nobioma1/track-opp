import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container antialiased max-w-4xl mx-auto pt-16 pb-8 px-2">
      {children}
    </div>
  );
};

export default Layout;
