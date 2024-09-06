import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import statsSlice from "./slices/statsSlice";
import entriesSlice from "./slices/entriesSlice";

export const store = configureStore({
  reducer: {
    entriesSlice,
    userSlice,
    authSlice,
    statsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
