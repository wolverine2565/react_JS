import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from './features/productsSlice';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability(id));
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.available ? 'Available' : 'Not Available'}</p>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
          <button onClick={() => handleToggleAvailability(product.id)}>Toggle Availability</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;