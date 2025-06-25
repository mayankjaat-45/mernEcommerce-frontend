import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Navigate, useNavigate } from 'react-router-dom';

const ProductDetailed = ({product}) => {
  const navigate = useNavigate();

  const {addToCart , buyNow } = useContext(CartContext);
  const handleAddToCart = () =>{
    alert("Product Added to Cart")
    addToCart(product);
  }; 
  const handleBuyNow =()=>{
    buyNow(product);
    navigate('/cart')
  }
  
  if(!product) return null;

  return (
    <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw] min-h-screen py-10 bg-gray-100'>
      <div className='max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-6 p-6'>
 {/* Product Image */}
        <div className='w-full h-full'>
          <img src={product.imageURL} alt={product.name} 
          className='w-full h-[400px] object-contain rounded-xl border'/>
        </div>

        {/* Product Info */}
        <div className='flex flex-col justify-between'>
          <div>
              <h1 className='text-3xl font-bold mb-2 text-gray-900'>{product.name}</h1>
              <p className='text-gray-700 text-lg mb-4'>{product.description}</p>
              <p className='text-green-600 font-semibold mb-6'>{product.price}</p>
          </div>

          {/* Size and Color */}
          <div className='flex flex-col gap-2 mt-6'>
            <label className='text-sm font-medium text-gray-700'>Size :</label>
            <select className='w-1/2 p-2 border rounded-md focus:outline-none '>
              <option >Select Size</option>
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="extraLarge">XL</option>
            </select>
          </div>
          <div className='border-t-1 border-gray-400'>
            <p>100% Original product.</p>
        <p>Cash on delivery is available on this product.</p>
        <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>

        {/* Action Button */}

        <div className='mt-10 flex flex-col sm:flex-row gap-4'>
          <button className='bg-black text-white px-6 py-4 rounded-md text-sm font-medium hover:bg-gray-700 transition' onClick={handleAddToCart}>Add to Cart</button>
          <button className='border border-black text-black px-6 py-4 rounded-md text-sm font-medium hover:bg-black hover:text-white transition'
          onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailed;
