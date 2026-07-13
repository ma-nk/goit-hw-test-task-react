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
  if (filters.engine) {
    params.engine = filters.engine;
  }
  if (filters.transmission) {
    params.transmission = filters.transmission;
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

      // The API response is in the format: { total: number, items: Camper[] }
      const items = response.data.items || [];
      const total = response.data.total || items.length;

      return {
        items,
        total,
      };
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