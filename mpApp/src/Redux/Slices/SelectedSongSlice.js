import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedSong: null,
};

export const selectedSongSlice = createSlice({
  name: "SelectedSong",
  initialState,
  reducers: {
    selectSong: (state, payload) => {
      state.SelectedSong = payload.payload;
    },
    removeSong: (state) => {
      state.SelectedSong = null;
    },
  },
});
export const { selectSong, removeSong } = selectedSongSlice.actions;
export default selectedSongSlice.reducer;
