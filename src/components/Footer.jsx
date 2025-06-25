import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/Main-Logo.png'


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="Chlothzy Logo" className="h-14 mb-4" />
          <p className="text-sm mb-2">
            <strong>Chlothzy Fashion</strong> brings bold elegance to your wardrobe.
          </p>
          <p className="text-sm mb-2">
            From bodycon dresses to chic essentials, we redefine style.
          </p>
          <p className="text-sm mb-2">
            Perfect fits, premium fabrics — confidence in every thread.
          </p>
          <p className="text-sm">
            Step into the spotlight with Chlothzy — where fashion speaks.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black transition">Home</a></li>
            <li><a href="#" className="hover:text-black transition">About Us</a></li>
            <li><a href="#" className="hover:text-black transition">Delivery</a></li>
            <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">
            <strong>Phone:</strong> <a href="tel:8505835814" className="hover:text-black">8505835814</a>
          </p>
          <p className="text-sm mb-2">
            <strong>Email:</strong> <a href="mailto:contact@chlothzy.shop" className="hover:text-black">contact@chlothzy.shop</a>
          </p>
          <p className="text-sm font-semibold mt-4">Address:</p>
          <p className="text-sm">Unit-113, Malabar Hill</p>
          <p className="text-sm">Maharashtra - 400006</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center">
        <p className="text-xs text-gray-500 mb-2">
          &copy; 2025 <span className="font-semibold text-black">chlothzy.shop</span> – All Rights Reserved.
        </p>
        <p className="text-sm font-medium mb-2">Follow us on Instagram for daily style inspo</p>
        <div className="flex justify-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <FaInstagram className="text-pink-600 text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
