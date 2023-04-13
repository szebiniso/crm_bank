import { createSlice } from "@reduxjs/toolkit";
import {getProjects, getUsers} from "./ProjectsSliceFunctions";


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
  },
})

export const projectSlice = projectsSlice.reducer;


