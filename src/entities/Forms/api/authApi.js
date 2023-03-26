import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../shared/utils/axiosConfig";
import {closeAuthErrorAlert} from "./AuthSlice";

export const AuthApi = createAsyncThunk(
  "auth/authUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("login/", data.data);
      console.log(response.data);
      data.navigate("/projects");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
