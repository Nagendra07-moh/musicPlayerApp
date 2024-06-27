import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Tracks: null,
};

export const tracksSlice = createSlice({
  name: "Tracks",
  initialState,
  reducers: {
    add: (state, payload) => {
      state.Albums = payload.payload;
    },
  },
});
export const { add } = tracksSlice.actions;
export default tracksSlice.reducer;
