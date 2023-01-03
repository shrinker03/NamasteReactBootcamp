import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    getIn: (state, action) => {
      (state.name = action.payload.name), (state.email = action.payload.email);
    },
    logOut: (state) => {
      (state.email = ''), (state.name = '');
    }
  }
});

export const { getIn, logOut } = userInfoSlice.actions;

export default userInfoSlice.reducer;
