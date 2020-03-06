import React from 'react';

const Dashboard = () => {
  return (
    <div className="rounded p-2 min-h-40 overflow-hidden shadow-lg">
      <h2 className="text-xl text-gray-700 uppercase font-bold my-2">
        Dashboard
      </h2>
      <div className="flex flex-wrap justify-between px-2">
        <h3 className="flex flex-col uppercase w-32 items-center">
          Jobs Applied <span className="text-5xl font-medium">0</span>
        </h3>
        <h3 className="flex flex-col uppercase w-32 items-center">
          No Response <span className="text-5xl font-medium">0</span>
        </h3>
        <h3 className="flex flex-col uppercase w-32 items-center">
          Interview <span className="text-5xl font-medium">0</span>
        </h3>
        <h3 className="flex flex-col uppercase w-32 items-center">
          Not a Match <span className="text-5xl font-medium">0</span>
        </h3>
        <h3 className="flex flex-col uppercase w-32 items-center">
          Offers <span className="text-5xl font-medium">0</span>
        </h3>
      </div>
    </div>
  );
};

export default Dashboard;
