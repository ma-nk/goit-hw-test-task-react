import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const buildParams = (filters) => {
  const params = {};
  if (filters.location) {
    params.location = filters.location;
  }
  if (filters.form) {
    params.form = filters.form;
  }
  if (filters.equipment && filters.equipment.length > 0) {
    filters.equipment.forEach((item) => {
      params[item] = true;
    });
  }
  return params;
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters, thunkAPI) => {
    try {
      const apiParams = buildParams(filters || {});
      const response = await axios.get("/campers", {
        params: apiParams,
      });
      // Correctly return the array of items from the response
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);