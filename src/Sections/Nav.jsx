import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 text-white">
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
        <ul
          className={`absolute lg:static top-14 left-0 lg:flex lg:space-x-6 w-full lg:w-auto bg-blue-600 lg:bg-transparent transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
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
    </nav>
  );
};

export default Nav;
