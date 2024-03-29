import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../shared/utils/axiosConfig";

export const AuthApi = createAsyncThunk(
  "auth/authUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("login/", data.data);
      console.log('profile: ', response.data);
      localStorage.setItem('role', response.data.role)
      localStorage.setItem('is_super_admin', response.data.is_superuser)
      localStorage.setItem('token', response.data.access)
      localStorage.setItem('userId', response.data.id)
      if(response.data.is_superuser == true){
        data.navigate("/main/admins");
      }else{
        data.navigate("/main/projects");
      }

      console.log(response.data)
      return response.data;
    } catch (e) {
      console.log("error", e.message)
      return rejectWithValue(e.message);
    }
  }
);
