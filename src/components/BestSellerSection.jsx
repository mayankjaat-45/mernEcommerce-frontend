import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import API from '../api/axios';

const BestSellerSection = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async() =>{
            const API = import.meta.env.VITE_API_BASE_URL;
    console.log(API);
            try {
                const res = await axios.get(`${API}/api/products` , {
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
