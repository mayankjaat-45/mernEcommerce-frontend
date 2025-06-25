import React from 'react';
import SubscribeSection from '../components/SubscribeSection';

const ContactUs = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]">
      <div className="max-w-6xl mx-auto mb-7">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-500">GET IN </span>
            <span className="text-black">TOUCH</span>
          </h2>
          <p className="mt-2 text-gray-600">
            We'd love to hear from you — let us know how we can help!
          </p>
        </div>

        {/* Form + Info */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Phone:</h3>
              <p className="text-gray-600">+91 9897832875</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email:</h3>
              <p className="text-gray-600">contact@chlothzy.MecomShop</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address:</h3>
              <p className="text-gray-600">ABCS-2345 NOIDA INIDA 201302</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-6 rounded-xl shadow-md space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <SubscribeSection/>
    </section>
  );
};

export default ContactUs;
