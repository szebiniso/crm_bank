import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../shared/utils/axiosConfig";

export const RegisterApi = createAsyncThunk(
  "register/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("register/", data.data);
      console.log(response.data);
      data.navigate("/");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
