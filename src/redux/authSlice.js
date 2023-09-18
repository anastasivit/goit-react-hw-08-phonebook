import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../redux/userActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
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

export default authSlice.reducer;
