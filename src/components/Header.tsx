import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleRTL = () => {
    setIsRTL(!isRTL);
    document.documentElement.dir = isRTL ? "ltr" : "rtl";
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Craft Beer Emporium
        </Link>

        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav className="hidden sm:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/management" className="hover:text-gray-400">
            Management
          </Link>
          <Link to="/purchases" className="hover:text-gray-400">
            Purchases
          </Link>
          <button
            onClick={toggleRTL}
            className="ml-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {isRTL ? "Switch to LTR" : "Switch to RTL"}
          </button>
        </nav>
      </div>

      {isOpen && (
        <nav className="sm:hidden bg-gray-700">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/management"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Management
          </Link>
          <Link
            to="/purchases"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Purchases
          </Link>

          <button
            onClick={toggleRTL}
            className="block w-full text-left px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
          >
            {isRTL ? "Switch to LTR" : "Switch to RTL"}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
