import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Tracks: null,
};

export const tracksSlice = createSlice({
  name: "Tracks",
  initialState,
  reducers: {
    addTracks: (state, payload) => {
      state.Tracks = payload.payload;
    },
  },
});
export const { addTracks } = tracksSlice.actions;
export default tracksSlice.reducer;
