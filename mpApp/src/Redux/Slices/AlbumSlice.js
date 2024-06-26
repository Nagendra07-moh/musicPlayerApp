import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Albums: null,
};

export const albumSlice = createSlice({
  name: "Albums",
  initialState,
  reducers: {
    add: (state, payload) => {
      state.Albums = payload.payload;
    },
  },
});
export const { add } = albumSlice.actions;
export default albumSlice.reducer;
