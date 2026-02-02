import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "../operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    selectedCamper: null,
    total: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        // payload is { items: [], total: ... }
        const { items, total } = action.payload;
        
        // Check if it's a "load more" action based on arg.page
        // We can access action.meta.arg to see the params passed to fetchCampers
        const isLoadMore = action.meta.arg && action.meta.arg.page && action.meta.arg.page > 1;

        if (isLoadMore) {
          state.items = [...state.items, ...items];
        } else {
          state.items = items;
        }
        state.total = total;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;