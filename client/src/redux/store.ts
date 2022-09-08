import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./UserSlice";

const store = configureStore({
    reducer: {
        user: UserSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;