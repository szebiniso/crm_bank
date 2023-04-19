import {createAsyncThunk} from "@reduxjs/toolkit";
import APIwithToken from "../../../shared/utils/axiosConfigWithToken";
import API from "../../../shared/utils/axiosConfig";

export const createIteration = createAsyncThunk(
  "iterations/createIteration",
  async (data, { rejectWithValue , dispatch}) => {
    try {
      const response = await API.post("iteration/", data.values);
      await dispatch(getIterations({ limit: 10, offset: 0 }))
      data.closeModal()
      return response.data;
    } catch (e) {
      console.log("create", e.message())
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const editIterationDate = createAsyncThunk(
  "iterations/editIterationDate",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.patch(`iteration/${data.id}/`, data.dates);
      await dispatch(getIterations())
      // data.closeModal()
      // data.closeDetailsModal()
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const getIterations = createAsyncThunk(
  "iterations/getIterations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("iteration/", { params: { limit: 20, offset: 0 }});
      console.log('iterations: ', response.data);
      return response.data.results;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

// export const getIterationById = createAsyncThunk(
//   "iterations/getIterationById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await API.get(`iteration/${id}`, { params: { limit: 20, offset: 0 }});
//       console.log('iterationById: ', response.data);
//       return response.data.results;
//     } catch (e) {
//       return rejectWithValue(e.response.data.message);
//     }
//   }
// );
//
// export const deleteOrganization = createAsyncThunk(
//   "organization/deleteOrganization",
//   async (data, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await APIwithToken.delete(`organization/${data.id}`);
//       await dispatch(getOrganizations())
//       data.handleCloseDeleteModal()
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e.response.data.message);
//     }
//   }
// );