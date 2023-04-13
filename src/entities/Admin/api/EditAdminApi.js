import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "../../../shared/utils/axiosConfig";

export const editAdmin = createAsyncThunk(
  "organization/editAdmin",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.patch(`organization/${data.values.id}/`, data.values);
      // await dispatch(getOrganizations())
      data.closeModal()
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);