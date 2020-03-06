import React from 'react';

const NewEntry = () => {
  return (
    <div>
      <h2>Record A New Opportunity</h2>
      <form>
        <input placeholder="Job Title" />
        <input placeholder="Company Name" />
        <textarea placeholder="Job Description" />
      </form>
    </div>
  );
};

export default NewEntry;
