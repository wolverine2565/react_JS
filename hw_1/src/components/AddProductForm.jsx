import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './features/productsSlice';

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', description: '', price: 0, available: true });

  const handleSubmit = () => {
    dispatch(addProduct(formData));
    setFormData({ name: '', description: '', price: 0, available: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Create form inputs for name, description, price, and availability */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;