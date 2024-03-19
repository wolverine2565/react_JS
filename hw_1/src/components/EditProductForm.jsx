import React from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './features/productsSlice';

const EditProductForm = ({ product }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateProduct({ ...product, name: 'New Name', description: 'New Description' }));
  };

  return (
    <div>
      {/* Create form inputs with default values for editing product */}
      <button onClick={handleUpdate}>Update Product</button>
    </div>
  );
};