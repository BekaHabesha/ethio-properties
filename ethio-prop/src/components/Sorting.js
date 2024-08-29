import React from 'react';

const Sorting = ({ onSort }) => {
  return (
    <div className="sorting">
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="location">Location</option>
        <option value="date">Date Listed</option>
        <option value="size">Size</option>
      </select>
    </div>
  );
};

export default Sorting;
