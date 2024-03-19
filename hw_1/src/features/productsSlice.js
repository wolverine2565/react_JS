import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      // Implement your update logic here
    },
    toggleAvailability: (state, action) => {
      // Implement your toggle logic here
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;

export default productsSlice.reducer;