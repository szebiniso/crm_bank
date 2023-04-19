import { createSlice } from "@reduxjs/toolkit";
import {createProject, deleteProject, editProject, getProjects} from "./ProjectsSliceFunctions";


const initialState = {
  users: [],
  projects: [],
  error: {},
  loading: false,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: {
    [getProjects.pending]: (state) => {
      state.loading = true;
    },
    [getProjects.fulfilled]: (state, action) => {
      state.loading = false
      state.projects = action.payload
    },
    [getProjects.rejected]: (state) => {
      state.loading = false
    },

    [createProject.pending]: (state) => {
      state.loading = true;
    },
    [createProject.fulfilled]: (state) => {
      state.loading = false
    },
    [createProject.rejected]: (state) => {
      state.loading = false
    },

    [editProject.pending]: (state) => {
      state.loading = true;
    },
    [editProject.fulfilled]: (state) => {
      state.loading = false
    },
    [editProject.rejected]: (state) => {
      state.loading = false
    },

    [deleteProject.pending]: (state) => {
      state.loading = true;
    },
    [deleteProject.fulfilled]: (state) => {
      state.loading = false
    },
    [deleteProject.rejected]: (state) => {
      state.loading = false
    },
  },
})

export const projectSlice = projectsSlice.reducer;


