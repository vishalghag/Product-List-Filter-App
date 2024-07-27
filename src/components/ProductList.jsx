import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <>
      {products.length > 0 && (
        <span className=" flex justify-center items-center m-2 p-2">
          Showing {products.length} of 20 products
        </span>
      )}
      <div className="bg-gray-200 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
