import React from 'react';
import { FaExchangeAlt, FaHeadphones } from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';

const SubscribeSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Subscribe Section */}
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-900">Join the Chlothzy Style Community</p>
        <h2 className="text-2xl font-bold text-black mt-2 mb-2">Subscribe now & get 20% off</h2>
        <p className="text-gray-600 mb-6">Chlothzy Fashion – Where Style Meets Confidence.</p>

        <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-1/3 bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
