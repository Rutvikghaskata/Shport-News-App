import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    load:(state) => {
      state.isLoading = true;
    },
    unload: (state) => {
      state.isLoading = false;
    },
  },
});

export const { load, unload } = counterSlice.actions;

export default counterSlice.reducer;
