import React, { useState } from "react";

const BrandFilter = ({ brands, selectedBrand, onBrandChange }) => {
  const [showAll, setShowAll] = useState(false);

  const initialBrandCount = 5;

  const brandsToDisplay = showAll ? brands : brands.slice(0, initialBrandCount);

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 font-poppins">Brands</h3>
      <div>
        {brandsToDisplay.map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={brand}
              checked={selectedBrand.includes(brand)}
              onChange={() => onBrandChange(brand)}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out "
            />
            <label htmlFor={brand} className="ml-2 text-gray-700 font-poppins">
              {brand}
            </label>
          </div>
        ))}
        {brands.length > initialBrandCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-2 text-indigo-600"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BrandFilter;
