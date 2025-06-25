import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const BestSellerProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const URL = import.meta.env.VITE_BACKEND_URL;
      try {
        const res = await axios.get(`${URL}/api/products`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
        // Fix here based on structure
        const productList = res.data.products || res.data; // Fallback if needed
        setProducts(productList.slice(5, 10));
      } catch (error) {
        console.log("Error fetching products:", error);
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
