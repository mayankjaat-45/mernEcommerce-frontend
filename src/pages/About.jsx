import React from 'react'
import hero_img from '../assets/hero_img.png'
import SubscribeSection from '../components/SubscribeSection'
import { FaSmile, FaTshirt, FaPeopleCarry } from 'react-icons/fa';

const About = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]'>
          <section className="bg-white px-6 py-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
            <span className="text-gray-500">ABOUT </span>
            <span className="text-black">US</span>
            <div className="w-16 h-1 bg-gray-400 mt-2 mx-auto"></div>
          </h2>
        </div>

        {/* Main Content: Image + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="rounded overflow-hidden shadow-lg">
            <img
              src={hero_img}
              alt="Chlothzy Fashion"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Text Content */}
          <div className="text-gray-700 text-base leading-relaxed">
            <p className="mb-4">
              <strong className="text-black">Chlothzy</strong> is your go-to destination for premium fashion that speaks elegance, confidence, and modern style. We believe in celebrating every body type through bold and beautiful silhouettes—
              especially our signature <strong>bodycon dresses</strong> designed to turn heads.
            </p>
            <p className="mb-4">
              Our curated collections reflect the latest trends while maintaining timeless quality. Whether you're dressing up for a party or owning your everyday look, <strong>Chlothzy</strong> ensures you're always fashion-forward with comfort and flair.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-2 text-black">Our Mission</h3>
            <p>
              At <strong>Chlothzy</strong>, our mission is to empower individuals through style. We aim to offer easy access to high-quality, trendsetting apparel that makes you feel confident in your own skin—especially with our standout bodycon collection.
            </p>

              <h3 className="font-semibold text-lg text-black mt-4 mb-2">By Ourself</h3>
              <p>
                Every piece is a statement of self-expression. Designed and curated by a passionate team, Chlothzy reflects who we are — bold, elegant, and fashion-forward.
              </p> 
              
          </div>
        </div>
      </div>
    </section>

       <div className='flex items-center gap-4 mt-3'>
        <p className='text-lg font-semibold'>Why Choose Us</p>
        <p className='w-19 h-0.5 bg-black'></p>
        </div>
       <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="hover:shadow-xl transition p-6 border rounded-xl">
            <FaTshirt className="text-4xl mx-auto text-black mb-4" />
            <h3 className="font-semibold text-lg mb-2">Quality & Comfort</h3>
            <p className="text-gray-600 text-sm">
              We use premium stretchable fabrics and sharp tailoring to ensure comfort with elegance.
            </p>
          </div>
          <div className="hover:shadow-xl transition p-6 border rounded-xl">
            <FaPeopleCarry className="text-4xl mx-auto text-black mb-4" />
            <h3 className="font-semibold text-lg mb-2">Customer Focused</h3>
            <p className="text-gray-600 text-sm">
              With 24/7 support and easy exchange, we prioritize your satisfaction at every step.
            </p>
          </div>
          <div className="hover:shadow-xl transition p-6 border rounded-xl">
            <FaSmile className="text-4xl mx-auto text-black mb-4" />
            <h3 className="font-semibold text-lg mb-2">Confidence Booster</h3>
            <p className="text-gray-600 text-sm">
              Each design is crafted to help you feel confident, stylish, and authentically you.
            </p>
          </div>
        </div>
    
          {/* Subscribe Section */}
          <SubscribeSection/>
        </div>
    </div>
  )
}

export default About
