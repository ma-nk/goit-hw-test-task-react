
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
  form: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.location = action.payload.location;
      state.equipment = action.payload.equipment;
      state.form = action.payload.form;
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
