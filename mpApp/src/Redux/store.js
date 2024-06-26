import { configureStore } from "@reduxjs/toolkit";
import AlbumSlice from "./AlbumSlice";

export const store = configureStore({
  reducer: {
    Albums: AlbumSlice,
  },
});
