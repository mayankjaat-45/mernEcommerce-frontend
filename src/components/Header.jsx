import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Main-Logo.png';
import { FaHamburger, FaSearch, FaShoppingBag, FaUserCircle, FaTimes } from 'react-icons/fa';
import { CartContext } from '../context/cartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = 'text-xl font-semibold hover:underline';

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw] shadow-md relative bg-white z-50">
      <div className="flex justify-between items-center py-3">
        {/* Logo */}
        <NavLink to="/" className="w-32">
          <img src={logo} alt="Logo" />
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="space-x-5 hidden sm:flex">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/collection" className={navLinkClass}>Collection</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center text-2xl space-x-4">
          <NavLink to="/collection"><FaSearch /></NavLink>
          <NavLink to="/register"><FaUserCircle /></NavLink>
          
          {/* Cart Icon with Badge */}
          <NavLink to="/cart" className="relative">
            <FaShoppingBag />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button className="sm:hidden" onClick={handleToggle}>
            {isOpen ? <FaTimes /> : <FaHamburger />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="flex flex-col sm:hidden space-y-3 pb-4 text-left">
          <NavLink to="/" className={navLinkClass} onClick={handleToggle}>Home</NavLink>
          <NavLink to="/collection" className={navLinkClass} onClick={handleToggle}>Collection</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={handleToggle}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={handleToggle}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
