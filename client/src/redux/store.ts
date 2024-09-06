import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import statsSlice from "./slices/statsSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    authSlice,
    statsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
