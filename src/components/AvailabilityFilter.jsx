import React from "react";

const AvailabilityFilter = ({ availability, onAvailabilityChange }) => {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-semibold mb-2 font-poppins">Availability</h3>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={availability.inStock}
          onChange={() => onAvailabilityChange("inStock")}
          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="inStock" className="ml-2 text-gray-700 font-poppins">
          In Stock
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={availability.outOfStock}
          onChange={() => onAvailabilityChange("outOfStock")}
          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="outOfStock" className="ml-2 text-gray-700 font-poppins">
          Out of Stock
        </label>
      </div>
    </div>
  );
};

export default AvailabilityFilter;
