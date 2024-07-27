import React, { useState, useEffect } from "react";
import { fetchProducts } from "../utils/apiCall";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import ProductList from "./ProductList";

const MainComponent = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [availability, setAvailability] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setFilteredProducts(products);
      setCategories([...new Set(products.map((p) => p.category))]);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory.length) {
      filtered = filtered.filter((product) =>
        selectedCategory.includes(product.category)
      );
    }

    filtered = filtered.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    if (availability) {
      filtered = filtered.filter((product) => product.inStock); // Assuming products have an inStock field
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, minPrice, maxPrice, availability]);

  const handleCategoryChange = (category) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const handlePriceChange = (value, type) => {
    if (type === "min") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const handleAvailabilityChange = (value) => {
    setAvailability(value);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap -mx-4">
            <aside className="w-full sm:w-1/4 px-4">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
              <PriceFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onPriceChange={handlePriceChange}
              />
              {/* BrandFilter omitted as Fake Store API does not have a brand field */}
              <AvailabilityFilter
                availability={availability}
                onAvailabilityChange={handleAvailabilityChange}
              />
            </aside>
            <main className="w-full sm:w-3/4 px-4">
              <ProductList products={filteredProducts} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
