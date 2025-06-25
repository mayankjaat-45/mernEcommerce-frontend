import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import API from '../api/axios';

const BestSellerSection = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async() =>{
            const URL = 'https://mernecommerce-backend-ml42.onrender.com';
            try {
                const res = await axios.get(`URL/api/products` , {
                    headers:{
                        Authorization:localStorage.getItem('token')
                    }
                });
                setProducts(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts()
    },[])
    return (
    <>
      {products.map((product)=>(
            <ProductCard key={product._id} product={product} />
      ))}
    </>
  )
}

export default BestSellerSection;
