import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { cart ,removeFromCart, changeQuantity} = useContext(CartContext);

  const totalPrice  = cart.reduce((acc,item) => acc + item.price * item.quantity, 0);

  const handleCheckOut =()=>{
    navigate('/checkout')
  }
  return (
    <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]'>
      <h2 className='text2xl font-bold mb-6'>Your Cart</h2>
      {cart.map((item)=>(
        <div key={item._id} 
        className='flex items-center justify-between mb-4 p-4 border rounded-md '>
          <img src={item.imageURL} alt={item.name} className='w-20 h-20 object-contain' />
            <div className='flex-1 ml-4'>
              <h3 className='text-lg font-semibold'>{item.name}</h3>
              <p>{item.price} * {item.quantity}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <button onClick={()=> changeQuantity(item._id, item.quantity - 1)}
                className='px-2'>-</button>
                <span>{item.quantity}</span>

                <button onClick={()=> changeQuantity(item._id , item.quantity + 1)}
                  className='px-2'>+</button>

                  <button onClick={()=>removeFromCart(item._id)}
                    className='text-red-600 ml-4'>Remove</button>
            </div>
           </div>
      ))}

  <button 
  className='bg-blue-600 text-white px-6 py-2 mt-6 rounded'
  onClick={handleCheckOut}>Proceed To CheckOut</button>
      <div className='text-right text-xl font-semibold mt-6'>Total : ₹ {totalPrice.toFixed(2)}</div>
    </div>
  )
}

export default Cart;
