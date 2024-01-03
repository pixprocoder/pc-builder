import { configureStore } from "@reduxjs/toolkit";
import addToBuild from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    selectProduct: addToBuild,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
