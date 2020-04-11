import React from 'react';

const Post = ({ posting }) => {
  return (
    <div className="border rounded text-gray-700 outline-none my-3 p-2">
      <div>
        <a href={posting.link} target="__blank">
          <p className="font-bold">
            {posting.position}{' '}
            {posting.remoteOrLocal.toLowerCase() === 'remote' && (
              <span>({posting.remoteOrLocal})</span>
            )}
          </p>
          <p>
            {posting.company}, {posting.country}
          </p>
          <div>
            <p></p>
            <p>{posting.fullTimeOrPartTime}</p>
            <p>{posting.experience}</p>
            <p>{posting.languages}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Post;
