import React, { useState } from "react";
import { FaUserCircle, FaShoppingCart, FaBars } from "react-icons/fa";
import { FA_SHOPPING_CART, FA_USER_CIRCLE, LOGO_URL } from "../utils/constant";
import SpanTag from "../utils/SpanTag";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">
                <img src={LOGO_URL} alt="logo" className=" w-auto max-h-5" />
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <SpanTag label={"Home"} />
                <SpanTag label={"Shop"} />
                <SpanTag label={"Blog"} />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {FA_USER_CIRCLE}
              {FA_SHOPPING_CART}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-indigo-600 focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <SpanTag label={"Home"} />
            <SpanTag label={"Shop"} />
            <SpanTag label={"Vlog"} />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <span className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">
                <FaUserCircle size={24} className="inline-block mr-2" />
                Profile
              </span>
              <span className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">
                <FaShoppingCart size={24} className="inline-block mr-2" />
                Cart
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
