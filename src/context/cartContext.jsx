
import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    },[]);

    const updateCart = (newCart) =>{
        localStorage.setItem("cart",JSON.stringify(newCart));
        setCart(newCart);
    };

    const addToCart =(product)=>{
        const exists = cart.find((item) => item._id === product._i);
        const updatedCart = exists ? cart.map((item) => item._id === product._id ? {
            ...item , quantity: item.quantity + 1} : item 
        ) : [...cart , { ...product, quantity: 1}];
        updateCart(updatedCart)
    };

    const removeFromCart = (id) =>{
        const updatedCart = cart.filter((item) =>item._id !== id);
        updateCart(updatedCart);
    };


    const changeQuantity = (id , quantity)=>{
        if(quantity < 1 ) return ;
        const updatedCart = cart.map((item)=>
            item._id === id ? { ...item , quantity} : item);
        updateCart(updatedCart);
    };

    const buyNow = (product) =>{
        setCart([{...product, quantity: 1}])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, changeQuantity , buyNow}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
