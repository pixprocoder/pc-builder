import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addToBuild } = productSlice.actions;

export default productSlice.reducer;
