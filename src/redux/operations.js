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
      if (item === "automatic") {
        params.transmission = "automatic";
      } else {
        params[item] = true;
      }
    });
  }
  // Add pagination params
  if (filters.page) {
    params.page = filters.page;
  }
  if (filters.limit) {
    params.limit = filters.limit;
  }
  return params;
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters = {}, thunkAPI) => {
    try {
      const apiParams = buildParams(filters);
      // Default limit if not provided
      if (!apiParams.limit) apiParams.limit = 4;
      
      const response = await axios.get("/campers", {
        params: apiParams,
      });
      // Return the full data object or normalize if needed
      // API returns { items: [...], total: ... } when paginated
      // Or just array if not? Based on curl check: {"total":..., "items":[...]}
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);