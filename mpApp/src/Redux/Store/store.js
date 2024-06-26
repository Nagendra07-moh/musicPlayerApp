import { configureStore } from "@reduxjs/toolkit";
import AlbumSlice from "../Slices/AlbumSlice";
export const store = configureStore({
  reducer: {
    Albums: AlbumSlice,
  },
});
