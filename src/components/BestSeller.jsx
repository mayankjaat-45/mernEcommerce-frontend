import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import API from '../api/axios';

const BestSellerProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const URL = 'https://mernecommerce-backend-ml42.onrender.com';
    console.log(URL);
      try {
        const res = await axios.get(`URL/api/products`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });

        // Skip first 5 (used in Latest), show next 5
        setProducts(res.data.slice(5, 10));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
};

export default BestSellerProduct;
