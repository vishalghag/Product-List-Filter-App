import React from "react";

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 font-poppins">Price</h3>
      <div className="flex flex-col space-y-2">
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={(e) => onPriceChange(e.target.value, "min")}
          className="range-slider"
        />
        <div className="text-center text-gray-700 font-poppins text-lg">
          ${minPrice} - ${maxPrice}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
