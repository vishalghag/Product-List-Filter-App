import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

export const LOGO_URL =
  "https://zataakse.com/wp-content/uploads/2023/11/logos_and_merchandise_assets.png";

export const FA_USER_CIRCLE = (
  <span className="p-1 rounded-full text-gray-900 hover:text-indigo-600 focus:outline-none cursor-pointer">
    <FaUserCircle size={24} />
  </span>
);

export const FA_SHOPPING_CART = (
  <span className="ml-3 p-1 rounded-full text-gray-900 hover:text-indigo-600 focus:outline-none cursor-pointer">
    <FaShoppingCart size={24} />
  </span>
);
