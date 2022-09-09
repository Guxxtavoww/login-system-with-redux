import { configureStore } from '@reduxjs/toolkit';

import UserSlice from './UserSlice'; // esse é o reducer

const store = configureStore({
  reducer: {
    user_redux: UserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
