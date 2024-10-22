// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  token: null,
  status: 'idle',
  error: null,
};

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (userId, { getState }) => {
  const { auth } = getState();
  const response = await axios.get(`/api/users/${userId}`, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('currentUser');
    },
    checkAuth: (state) => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const token = localStorage.getItem('token');
      const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

      state.isAuthenticated = isLoggedIn;
      state.token = isLoggedIn ? token : null;
      state.currentUser = isLoggedIn ? currentUser : null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { login, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;
