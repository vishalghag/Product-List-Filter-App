import React from "react";

const BrandFilter = ({ brands, selectedBrand, onBrandChange }) => {
  return (
    <div>
      <h3>Brands</h3>
      <ul>
        {brands.map((brand) => (
          <li key={brand}>
            <input
              type="checkbox"
              checked={selectedBrand.includes(brand)}
              onChange={() => onBrandChange(brand)}
            />
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
