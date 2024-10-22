// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload; //coming payload
 
    //   if (username === 'admin' && password === 'password') {
        if (username !=null && password !=null) {
        state.isAuthenticated = true;
        state.username = username;
      } else {
        alert('Invalid credentials');
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
