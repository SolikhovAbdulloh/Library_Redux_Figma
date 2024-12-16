import { createSlice } from "@reduxjs/toolkit";

const cinema = createSlice({
  name: "cinema_figma",
  initialState: {
    CategoryBooks: JSON.parse(localStorage.getItem("Books")) || [],
  },
  reducers: {
    SetSelectfilter(state, actions) {
      state.CategoryBooks = [...actions.payload.books];
      localStorage.setItem("Books", JSON.stringify(state.CategoryBooks));
    },
  },
});
export const { SetSelectfilter } = cinema.actions;
export default cinema.reducer;
