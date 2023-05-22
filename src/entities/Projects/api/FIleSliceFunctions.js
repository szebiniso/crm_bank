import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "../../../shared/utils/axiosConfig";
import {getProjectById, getProjects} from "./ProjectsSliceFunctions";

export const deleteFile = createAsyncThunk(
  "projects/deleteFile",

  async ({file_id, id} ,{ rejectWithValue , dispatch}) => {
    try {
      const res = await API.delete(`project-file/${file_id}`);
      dispatch(getProjectById(id))
      if (!res) {
        throw new Error("ERROR");
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);


export const getFilesById = createAsyncThunk(
  "projects/getFilesById",
  async (id,{ rejectWithValue}) => {
    try {
      const res = await API.get(`project-file/`, {params: {project_id: id}});
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