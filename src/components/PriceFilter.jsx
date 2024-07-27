import React from "react";

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }) => {
  return (
    <div>
      <h3>Price</h3>
      <input
        type="range"
        min="0"
        max="1000"
        value={minPrice}
        onChange={(e) => onPriceChange(e.target.value, "min")}
      />
      <input
        type="range"
        min="0"
        max="1000"
        value={maxPrice}
        onChange={(e) => onPriceChange(e.target.value, "max")}
      />
      <div>
        ${minPrice} - ${maxPrice}
      </div>
    </div>
  );
};

export default PriceFilter;
