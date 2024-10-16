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

// Async thunk to add user data (register)
export const addUserData = createAsyncThunk('auth/addUserData', async (userData) => {
  const response = await axios.post('/api/register', userData);
  return response.data;
});

// Async thunk to edit user data
export const editUserData = createAsyncThunk('auth/editUserData', async ({ userId, userData }, { getState }) => {
  const { auth } = getState();
  const response = await axios.put(`/api/users/${userId}`, userData, {
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
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    checkAuth: (state) => {
      const token = localStorage.getItem('token');
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
      }
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
      })
      .addCase(addUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(addUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(editUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
      })
      .addCase(editUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { login, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;
