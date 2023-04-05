import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../shared/utils/axiosConfig";
import {setCookie} from "../../../shared/utils/Cookies";

export const AuthApi = createAsyncThunk(
  "auth/authUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("login/", data.data);
      console.log(response.data);
      setCookie('role', response.data.role, 1)
      setCookie('is_super_admin', response.data.is_superuser, 1)
      data.navigate("/main");
      console.log(response.data)
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
