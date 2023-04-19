import {createSlice} from "@reduxjs/toolkit";
import {getIterations} from "./IterationApi";

const initialState = {
  loading: false,
  error: false,
  createError: false,
  iterations: [],
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

    // [editIteration.pending]: (state) => {
    //   state.loading = true;
    // },
    // [editIteration.fulfilled]: (state) => {
    //   state.loading = false
    // },
    // [editIteration.rejected]: (state) => {
    //   state.loading = false
    //   state.error = true
    // },
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