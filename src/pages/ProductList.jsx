import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';


const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async () =>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products` , {
          headers:{
            Authorization:localStorage.getItem('token')
          }
        });
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]'>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 py-10 border-t'>
        <div className='min-w-60'>
          <p className='text-2xl font-semibold'>Filter</p>
          <div className="border border-gray-300 pl-5 py-3 mt-6 hidden sm:block">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                  <p className='flex gap-2 tex-xl'>
                    <input className='w-3' type="checkbox" value='men'/>
                    Men
                  </p>
                   <p className='flex gap-2 tex-xl'>
                    <input className='w-3' type="checkbox" value='women'/>
                    Women
                  </p>
                   <p className='flex gap-2 tex-xl'>
                    <input className='w-3' type="checkbox" value='kid'/>
                    Kid
                  </p>
              </div>
          </div>
          <div className="border border-gray-300 pl-5 py-3 mt-6 hidden sm:block">
            <p className="mb-3 text-sm font-medium">Types</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                  <p className='flex gap-2 tex-xl'>
                    <input className='w-3' type="checkbox" value='topwear'/>
                    Topwear
                  </p>
                   <p className='flex gap-2 tex-xl'>
                    <input className='w-3' type="checkbox" value='bottomwear'/>
                    Bottomwear
                  </p>
                   <p className='flex gap-2 tex-xl'>
                    <input className='w-3' type="checkbox" value='winterwear'/>
                    Winterwear
                  </p>
              </div>
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex justify-between items-center text-base sm:text-xl'>
            <div className='inline-flex gap-4 items-center'>
               <p className='text-lg font-semibold'>ALL COLLECTIONS</p>
                <p className='w-19 h-0.5 bg-black'></p>
            </div>
            <select className='border-1 p-2 tex-sm border-gray-500'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="LowToHigh">Sort by: Low to high</option>
              <option value="HighToLow">Sort by: High to Low</option>
            </select>
          </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
        {products.map((product) => (
         <ProductCard key={product._id}
         product={product}
         />
        ))}
      </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList;
