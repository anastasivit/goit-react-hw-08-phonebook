import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userData: null,
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const { setIsAuthenticated, setUser } = authSlice.actions;

export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export default authSlice.reducer;
