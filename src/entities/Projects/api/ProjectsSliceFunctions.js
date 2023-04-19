import {createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../../shared/utils/axiosConfig'

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async function(_,{ rejectWithValue}){
    try {
      const res = await API.get('project/', { params: { limit: 20, offset: 0 }});
      console.log(res)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data.results
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);


export const createProject = createAsyncThunk(
  "projects/createProject",
  async ({values, closeModal} ,{ rejectWithValue, dispatch }) => {
    try {
      const res = await API.post('project/', values);
      console.log(res)
      await closeModal()
      dispatch(getProjects())
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const editProject = createAsyncThunk(
  "projects/editProject",
  async ({values, closeModal} ,{ rejectWithValue, dispatch }) => {
    try {
      const res = await API.put(`project/${values.id}/`, values);
      await closeModal()
      dispatch(getProjects())
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const archiveProject = createAsyncThunk(
  "projects/archiveProject",
  async (id ,{ rejectWithValue, dispatch }) => {
    try {
      const res = await API.patch(`project/${id}/`, {is_archived: true});
      dispatch(getProjects())
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const unArchiveProject = createAsyncThunk(
  "projects/unArchiveProject",
  async (id ,{ rejectWithValue, dispatch }) => {
    try {
      const res = await API.patch(`project/${id}/`, {is_archived: false});
      dispatch(getProjects())
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject}",

  async ({id, handleCloseDeleteModal, closeDetailsModal} ,{ rejectWithValue , dispatch}) => {
    try {
      const res = await API.delete(`project/${id}`);
      console.log("res", res)
      await handleCloseDeleteModal()
      closeDetailsModal()
      dispatch(getProjects())
      if (!res) {
        throw new Error("ERROR");
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);