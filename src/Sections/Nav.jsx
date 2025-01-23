import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          Logo
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Nav Links */}
        <div
          className={`absolute lg:static top-14 left-0 z-10 lg:flex lg:space-x-6 w-full lg:w-auto bg-blue-600 lg:bg-transparent transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col lg:flex-row">
            <li className="py-2 px-4 lg:py-0 hover:bg-blue-700 lg:hover:bg-transparent">
              <a href="#home" className="block">Home</a>
            </li>
            <li className="py-2 px-4 lg:py-0 hover:bg-blue-700 lg:hover:bg-transparent">
              <a href="#about" className="block">About Us</a>
            </li>
            <li className="py-2 px-4 lg:py-0 hover:bg-blue-700 lg:hover:bg-transparent">
              <a href="#services" className="block">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
