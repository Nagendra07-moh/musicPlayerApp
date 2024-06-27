import { configureStore } from "@reduxjs/toolkit";
import AlbumSlice from "../Slices/AlbumSlice";
import TracksSlice from "../Slices/TracksSlice";
export const store = configureStore({
  reducer: {
    Albums: AlbumSlice,
    Tracks: TracksSlice,
  },
});
