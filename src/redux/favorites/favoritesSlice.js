
import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const camper = action.payload;
      const isFavorite = state.items.find((item) => item.id === camper.id);
      if (isFavorite) {
        state.items = state.items.filter((item) => item.id !== camper.id);
      } else {
        state.items.push(camper);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
