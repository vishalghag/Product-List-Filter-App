import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain p-4 bg-gray-100"
      />
      <div className="p-4">
        <p className="text-gray-700 mt-2 font-poppins text-xl">
          {product.category}
        </p>
        <h3 className="text-lg font-bold font-poppins">{product.title}</h3>
        <p className="text-gray-600 font-medium text-lg font-poppins">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
