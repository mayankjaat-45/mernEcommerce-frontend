import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailed from '../components/ProductDetailed';

const ProductPage = () => {
    const { id } = useParams();
    const [product,setProduct] = useState(null);

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try {
                console.log("fetching Product by id" , id);
                const res = await axios.get(`http://localhost:3000/api/products/${id}`);
                console.log("Product Fetched: ", res.data);
                setProduct(res.data);
            } catch (error) {
                console.log("Error Fetching product by Id" ,error);
            }
        };
        fetchProduct();
    },[id])
  return (
    <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px[9vw]'>
      {product ? <ProductDetailed product={product}/> : <p>Loading .....</p>}
    </div>
  )
}
export default ProductPage
