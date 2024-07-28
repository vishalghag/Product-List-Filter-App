import React, { useState, useEffect } from "react";
import { fetchProducts } from "../utils/apiCall";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import BrandFilter from "./BrandFilter";
import ProductList from "./ProductList";
import Spinner from "./Spinner";
import Navbar from "./Navbar";

const MainComponent = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [availability, setAvailability] = useState({
    inStock: false,
    outOfStock: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const products = await fetchProducts();
      setProducts(products);
      setFilteredProducts(products);
      setCategories([...new Set(products.map((p) => p.category))]);
      setBrands([...new Set(products.map((p) => p.brand))]);
      setLoading(false);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    setLoading(true);
    let filtered = products;

    if (selectedCategory.length) {
      filtered = filtered.filter((product) =>
        selectedCategory.includes(product.category)
      );
    }

    if (selectedBrand.length) {
      filtered = filtered.filter((product) =>
        selectedBrand.includes(product.brand)
      );
    }

    filtered = filtered.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    if (availability.inStock) {
      filtered = filtered.filter(
        (product) => product.availability === "in stock"
      );
    }

    if (availability.outOfStock) {
      filtered = filtered.filter(
        (product) => product.availability === "out of stock"
      );
    }

    setFilteredProducts(filtered);
    setLoading(false);
  }, [
    products,
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
    availability,
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((b) => b !== brand)
        : [...prevSelected, brand]
    );
  };

  const handlePriceChange = (value, type) => {
    if (type === "min") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const handleAvailabilityChange = (type) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [type]: !prevAvailability[type],
    }));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-wrap -mx-4">
              <aside className="w-full sm:w-1/4 px-4">
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                />
                <BrandFilter
                  brands={brands}
                  selectedBrand={selectedBrand}
                  onBrandChange={handleBrandChange}
                />
                <PriceFilter
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onPriceChange={handlePriceChange}
                />
                <AvailabilityFilter
                  availability={availability}
                  onAvailabilityChange={handleAvailabilityChange}
                />
              </aside>
              <main className="w-full sm:w-3/4 px-4">
                {filteredProducts.length > 0 ? (
                  <ProductList products={filteredProducts} />
                ) : (
                  <div className="text-center text-gray-700 mt-4">
                    No products match the selected filters.
                  </div>
                )}
              </main>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainComponent;
