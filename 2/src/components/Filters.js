
import React from 'react';

const Filters = ({ handleFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFilterChange(name, value);
  };

  return (
    <div>
      <h3>Filters</h3>
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" onChange={handleChange} />
      {/* Add more filter*/}
    </div>
  );
};

export default Filters;
