import React from "react";

const AvailabilityFilter = ({ availability, onAvailabilityChange }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Availability</h3>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={availability}
          onChange={() => onAvailabilityChange(!availability)}
          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="inStock" className="ml-2 text-gray-700">
          In Stock
        </label>
      </div>
    </div>
  );
};

export default AvailabilityFilter;
