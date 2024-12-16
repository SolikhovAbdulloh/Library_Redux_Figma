import { configureStore } from "@reduxjs/toolkit";
import cinema from "./Slice_store";
export const store = configureStore({
  reducer: {
    cinema,
  },
});
