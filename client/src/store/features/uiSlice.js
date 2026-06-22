import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  isNavOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setNavOpen: (state, action) => {
      state.isNavOpen = action.payload;
    },
  },
});

export const { setTheme, toggleTheme, setNavOpen } = uiSlice.actions;
export default uiSlice.reducer;
