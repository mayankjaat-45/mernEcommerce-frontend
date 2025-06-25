import axios from 'axios';
import React, { useState } from 'react';
import API from '../api/axios';

const AddProduct = () => {
 const [name, setName] = useState('');
 const [imageURL, setImageURL] = useState('');
 const [description,setDescription] = useState('');
 const [price, setPrice] = useState(0)

  const handleAddProduct = async(e)=>{
    e.preventDefault();
     await API.post(`/api/products/add`, {imageURL,name,description,price})
     .then(()=>{
      setImageURL('');
      setName('');
      setDescription('');
      setPrice(0)
     })
     .catch((error)=>alert(error.message));
  }
    
  return (
    <div className="px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
      <form
        className="bg-white p-4 rounded shadow space-y-4"
        onSubmit={handleAddProduct}
      >
        <input
          type="text"
          onChange={(e)=>setImageURL(e.target.value)}
          value={imageURL}
          className="w-full border p-2"
          required
        />

        <input
          type="text"
          placeholder="Product Name"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          className="w-full border p-2"
          required
        />

        <textarea
          placeholder="Product Description"
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          className="w-full border p-2"
          required
        />

        <input
          type="number"
          placeholder="Product Price"
          onChange={(e)=>setPrice(e.target.value)}
          value={price}
          className="w-full border p-2"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Button
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
