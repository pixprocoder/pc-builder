import { configureStore } from "@reduxjs/toolkit";
import increment from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    increment,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
