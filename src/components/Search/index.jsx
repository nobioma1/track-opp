import React from 'react';

const Search = ({ searchParam, setSearchParam }) => {
  return (
    <div>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder="🔎 Type to search applications"
        value={searchParam}
        onChange={e => setSearchParam(e.target.value)}
      />
    </div>
  );
};

export default Search;
