import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk to fetch all products
export const fetchProducts = createAsyncThunk('db/fetchProducts', async () => {
  const response = await axios.get('http://localhost:3001/products');
  return response.data;
});

// Fetch a single product by ID
export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
    const response = await axios.get(`http://localhost:3001/products/${productId}`);
    return response.data;
  });
  
  // Fetch products by category
  export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (category) => {
    const response = await axios.get(`http://localhost:3001/products/${category}`);
    return response.data;
  });

const productsSlice = createSlice({
  name: 'products',
  initialState: {
      products: [],
      product:null, //for single product
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers(builder) {
      builder
          .addCase(fetchProducts.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.products = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message;
          })
        //   Handle Product by id
          .addCase(fetchProductById.pending, (state) => {
              state.status = 'loading';
              state.product = null; // Clear the previous product data
          })
          .addCase(fetchProductById.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.product = action.payload;
          })
          .addCase(fetchProductById.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message;
              state.product = null;
          })
      // Handle fetchProductsByCategory
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearProducts, clearProduct } = productsSlice.actions;

export default productsSlice.reducer;
