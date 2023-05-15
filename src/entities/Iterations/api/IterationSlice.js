import {createSlice} from "@reduxjs/toolkit";
import {getAllTasks, getIterationById, getIterations, getTasks} from "./IterationApi";

const initialState = {
  loading: false,
  error: false,
  createError: false,
  iterations: [],
  iterationById: {},
  tasks: [],
  allTasks: [],
  count: null
};

const iterationSlice = createSlice({
  name: 'iterations',
  initialState,
  reducers: {},
  extraReducers: {
    [getIterations.pending]: (state) => {
      state.loading = true;
    },
    [getIterations.fulfilled]: (state, action) => {
      state.loading = false
      state.iterations = action.payload
    },
    [getIterations.rejected]: (state) => {
      state.loading = false
      state.error = true
    },

    [getIterationById.pending]: (state) => {
      state.loading = true;
    },
    [getIterationById.fulfilled]: (state, action) => {
      state.loading = false
      state.iterationById = action.payload
    },
    [getIterationById.rejected]: (state) => {
      state.loading = false
      state.error = true
    },

    [getTasks.pending]: (state) => {
      state.loading = true;
    },
    [getTasks.fulfilled]: (state, action) => {
      state.loading = false
      state.tasks = action.payload
    },
    [getTasks.rejected]: (state) => {
      state.loading = false
      state.error = true
    },

    [getAllTasks.pending]: (state) => {
      state.loading = true;
    },
    [getAllTasks.fulfilled]: (state, action) => {
      state.loading = false
      state.allTasks = action.payload
    },
    [getAllTasks.rejected]: (state) => {
      state.loading = false
      state.error = true
    },
    //
    // [createIteration.pending]: (state) => {
    //   state.loading = true;
    // },
    // [createIteration.fulfilled]: (state) => {
    //   state.loading = false
    // },
    // [createIteration.rejected]: (state) => {
    //   state.loading = false
    //   state.createError = true
    // },

  },
})

export const iterationsSlice = iterationSlice.reducer;