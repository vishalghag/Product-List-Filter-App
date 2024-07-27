import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 font-poppins">Categories</h3>
      {categories.map((category) => (
        <div key={category} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={category}
            checked={selectedCategory.includes(category)}
            onChange={() => onCategoryChange(category)}
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <label htmlFor={category} className="ml-2 text-gray-700 font-poppins">
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
