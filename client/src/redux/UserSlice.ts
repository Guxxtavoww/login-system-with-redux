import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserState, IUser } from '../types/user';

const UserSlice = createSlice({
  name: 'user',
  initialState: {} as IUserState,
  reducers: {
    loginStart: (state) => {
      state.error = '';
      state.isFetching = true;
      state.currentUser = null;
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.error = '';
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = '';
    },
  },
});

export default UserSlice.reducer;
export const { loginError, loginStart, loginSuccess, logOut } =
  UserSlice.actions;
