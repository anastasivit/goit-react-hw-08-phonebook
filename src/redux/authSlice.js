import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../redux/userActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userData: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.userData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {});
  },
});

export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export default authSlice.reducer;
