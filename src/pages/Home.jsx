import React from 'react'
import hero_img from '../assets/hero_img.png'
import LatestProduct from '../components/LatestProduct';
import SubscribeSection from '../components/SubscribeSection';
import { FaExchangeAlt, FaHeadphones } from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';
import AddProduct from './AddProduct';
import BestSellerProduct from '../components/BestSellerProduct';

const Home = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]'>
      {/* Hero section */}
      {/* <AddProduct/> */}
      <div className='w-full flex flex-col sm:flex-row border border-b-gray-400'>
        <div className='w-full sm:w-1/2 flex justify-center items-center py-8 sm:py-0'>
            <div>
                <div className='flex items-center gap-2 mb-3'>
                  <p className='w-15 h-0.5 bg-black'></p>
                  <p className='text-lg font-semibold'>OUR BESTSELLERS</p>
                </div>
                <h1 className='font-medium text-3xl sm:text-4xl md:text-5xl font-serif'>Chlothzy Arrivals</h1>
                <div className='flex items-center gap-4 mt-3'>
                  <p className='text-lg font-semibold'>SHOP NOW</p>
                  <p className='w-19 h-0.5 bg-black'></p>
                </div>
            </div>
        </div>
        <div className='w-full sm:w-1/2'>
          <img src={hero_img} alt="" />
        </div>
      </div>

    
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
         <div className='inline-flex items-center gap-4 mb-3'>
            <p className='text-gray-500 font-medium'>LATEST <span className='text-black'>COLLECTIONS </span></p>
            <p className='w-8 h-0.5 sm:w-12 sm:h-1 bg-gray-700'></p>
          </div>
          <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-800'>Chlothzy’s latest collection is where elegance meets trend. Fashion that speaks your style.</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
       <LatestProduct/>
      </div>
    </div>


      <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
         <div className='inline-flex items-center gap-4 mb-3'>
            <p className='text-gray-500 font-medium'>BEST <span className='text-black'>SELLER </span></p>
            <p className='w-8 h-0.5 sm:w-12 sm:h-1 bg-gray-700'></p>
          </div>
          <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-800'>Our best seller — loved by many, styled by all. Elevate your look with timeless charm.</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
       <BestSellerProduct/>
      </div>
    </div> 


    {/* last  */}
     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <FaExchangeAlt className="mx-auto text-4xl text-black mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Easy Exchange Policy</h3>
              <p className="text-gray-500">We offer hassle free exchange policy</p>
            </div>
            <div>
              <MdOutlineVerified className="mx-auto text-4xl text-black mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">7 Days Return Policy</h3>
              <p className="text-gray-500">We provide 7 days free return policy</p>
            </div>
            <div>
              <FaHeadphones className="mx-auto text-4xl text-black mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Best customer support</h3>
              <p className="text-gray-500">We provide 24/7 customer support</p>
            </div>
          </div>
    
          {/* Subscribe Section */}
          <SubscribeSection/>
          </div>
    </div>
  )
}

export default Home;
