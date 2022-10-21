import {createSlice } from '@reduxjs/toolkit';


export const UserSlice = createSlice({
  name: 'User',
  initialState: {

    user: {

      logado: 1,
      email: '',
      nome: '',
      id: ''
    },
    
    
  },

  reducers: {
    login: (state, action) => {

      state.user = action.payload
      
    },

    logout: (state, action) => {

      state.user = action.payload
    }
  },
});

export const {login, logout} = UserSlice.actions;


export const selectUser = (state) => state.user.user;


export default UserSlice.reducer;
