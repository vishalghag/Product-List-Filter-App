import axios from "axios";

// const API_URL = "https://fakestoreapi.com/products";
const API_URL2 = "https://66a4fac95dc27a3c190a5579.mockapi.io/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL2);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return;
  }
};
