import {createAsyncThunk} from "@reduxjs/toolkit";
import APIwithToken from "../../../shared/utils/axiosConfigWithToken";

export const createOrganization = createAsyncThunk(
  "organization/createOrganization",
  async (data, { rejectWithValue , dispatch}) => {
    try {
      const response = await APIwithToken.post("organization/", data.values);
      await dispatch(getOrganizations({ limit: 10, offset: 0 }))
      data.closeModal()
      return response.data;
    } catch (e) {
      console.log("create", e.message())
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const editOrganization = createAsyncThunk(
  "organization/editOrganization",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await APIwithToken.patch(`organization/${data.values.id}/`, data.values);
      await dispatch(getOrganizations({ limit: 10, offset: 0 }))
      data.closeModal()
      data.closeDetailsModal()
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const getOrganizations = createAsyncThunk(
  "organization/getOrganizations",
  async ({limit, offset}, { rejectWithValue }) => {
    try {
      const response = await APIwithToken.get("organization/", { params: { limit: limit, offset: offset }});
      console.log(response.data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const deleteOrganization = createAsyncThunk(
  "organization/deleteOrganization",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await APIwithToken.delete(`organization/${data.id}`);
      await dispatch(getOrganizations())
      data.handleCloseDeleteModal()
      console.log(response.data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);