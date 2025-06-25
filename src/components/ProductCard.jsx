import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {


  return (
     <Link to={`/product/${product._id}`} className='block hover:scale-105 transition'>
     <div className='border rounded-xl  shadow-md hover:shadow-lg transition p-4 bg-white flex flex-col'>
        <img src={product.imageURL}
         alt={product.name} 
         className='h-48 w-full object-cover rounded-lg'/>
         <h2 className='mt-4 text-lg font-semibold'>{product.name}</h2>
         <p className='text-blue-600 font-bold text-xl mb-3'>₹{product.price}</p>
    </div>
    </Link>
    
  );
};

export default ProductCard
