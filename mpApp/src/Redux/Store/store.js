import { configureStore } from "@reduxjs/toolkit";
import AlbumSlice from "../Slices/AlbumSlice";
import TracksSlice from "../Slices/TracksSlice";
import SelectedSongSlice from "../Slices/SelectedSongSlice";
export const store = configureStore({
  reducer: {
    Albums: AlbumSlice,
    Tracks: TracksSlice,
    SelectedSong: SelectedSongSlice,
  },
});
