import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import API from '../api/axios';

const BestSellerProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get(`/api/products`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });

        // Skip first 5 (used in Latest), show next 5
       const productList = res.data.products || res.data; // Fallback if needed
        setProducts(productList.slice(5, 10));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
       {Array.isArray(products) &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </>
  );
};

export default BestSellerProduct;
