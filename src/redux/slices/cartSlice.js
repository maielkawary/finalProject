import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch cart for a specific user
export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId) => {
  const response = await axios.get(`http://localhost:3001/cart?userId=${userId}`);
  const cartData = response.data[0]; // Assuming only one cart per user
  console.log(cartData);
  if (!cartData) {
    return { userId, products: [] };
  }
  return cartData;
});

// Add a product to the cart
export const addToCart = createAsyncThunk('cart/addToCart', async ({ userId, product }) => {
  const cartResponse = await axios.get(`http://localhost:3001/cart?userId=${userId}`);
  let cart = cartResponse.data[0];
  if (cart) {
    const existingProductIndex = cart.products.findIndex((p) => p.productId === product.productId);
    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += product.quantity;
    } else {
      cart.products.push(product);
    }
    const response = await axios.put(`http://localhost:3001/cart/${cart.id}`, cart);
    return response.data;
  } else {
    const newCart = {
      userId: userId,
      products: [product],
    };
    const response = await axios.post('http://localhost:3001/cart', newCart);
    return response.data;
  }
});

// Update the quantity of a product in the cart
export const updateCartItemQuantity = createAsyncThunk(
  'cart/updateCartItemQuantity',
  async ({ userId, productId, quantity }) => {
    const cartResponse = await axios.get(`http://localhost:3001/cart?userId=${userId}`);
    let cart = cartResponse.data[0];
    if (cart) {
      const existingProductIndex = cart.products.findIndex((p) => p.productId === productId);
      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity = quantity;
        const response = await axios.put(`http://localhost:3001/cart/${cart.id}`, cart);
        return response.data;
      }
    }
    throw new Error('Cart or product not found');
  }
);

// Remove a product from the cart
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async ({ userId, productId }) => {
  const cartResponse = await axios.get(`http://localhost:3001/cart?userId=${userId}`);
  let cart = cartResponse.data[0];
  if (cart) {
    cart.products = cart.products.filter((p) => p.productId !== productId);
    const response = await axios.put(`http://localhost:3001/cart/${cart.id}`, cart);
    return response.data;
  }
  throw new Error('Cart not found');
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.products || [];
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.products;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.items = action.payload.products; // Assuming response returns updated products
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload.products;
      });
  },
});

export default cartSlice.reducer;
