import {createAsyncThunk} from "@reduxjs/toolkit";
import APIwithToken from "../../../shared/utils/axiosConfigWithToken";
import API from "../../../shared/utils/axiosConfig";

export const createIteration = createAsyncThunk(
  "iterations/createIteration",
  async (data, { rejectWithValue , dispatch}) => {
    try {
      const response = await API.post("iteration/", data.values);
      await dispatch(getIterations(data.id))
      data.closeModal()
      return response.data;
    } catch (e) {
      console.log("create", e.message())
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const editIteration = createAsyncThunk(
  "iterations/editIteration",
  async ({project_id, values, closeModal}, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.patch(`iteration/${values.id}/`, values);
      await dispatch(getIterations(project_id))
      closeModal()
      // data.closeDetailsModal()
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const deleteIteration = createAsyncThunk(
  "iterations/deleteIteration",
  async ({project_id, iteration_id}, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.delete(`iteration/${iteration_id}/`);
      await dispatch(getIterations(project_id))
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const completeIteration = createAsyncThunk(
  "iterations/completeIteration",
  async ({iteration_id, project_id, handleCloseCompleteIterationModal}, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.patch(`iteration/${iteration_id}/`, {is_completed: true});
      await dispatch(getIterations(project_id))
      handleCloseCompleteIterationModal()
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const getIterations = createAsyncThunk(
  "iterations/getIterations",
  async (project_id, { rejectWithValue }) => {
    try {
      const response = await API.get("iteration/", { params: { limit: 20, offset: 0, project: project_id }});
      console.log('iterations: ', response.data);
      return response.data.results;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const getIterationById = createAsyncThunk(
  "iterations/getIterationById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.get(`iteration/${id}`);
      console.log('iteration: ', response.data);
      return response.data.results;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const getTasks = createAsyncThunk(
  "iterations/getTasks",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.get("task/", { params: { limit: 20, offset: 0, iteration_id: id }});
      console.log('taskssss: ', response.data);
      return response.data.results;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const getAllTasks = createAsyncThunk(
  "iterations/getAllTasks",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.get("task/", { params: { limit: 100, offset: 0 }});
      console.log('taskssss: ', response.data);
      return response.data.results;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const createTask = createAsyncThunk(
  "iterations/createTask",
  async (data, { rejectWithValue , dispatch}) => {
    try {
      const response = await API.post("task/", data);
      await dispatch(getTasks(data.iteration_id))
      await dispatch(getAllTasks())
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const editTaskApi = createAsyncThunk(
  "iterations/editTask",
  async ({id, data, iteration_id}, { rejectWithValue , dispatch}) => {
    try {
      const response = await API.patch(`task/${id}/`, data);
      await dispatch(getTasks(iteration_id))
      await dispatch(getAllTasks())
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "iterations/deleteTask",
  async ({id, iteration_id}, { rejectWithValue , dispatch}) => {
    try {
      const response = await API.delete(`task/${id}`);
      await dispatch(getTasks(iteration_id))
      return response.data;
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