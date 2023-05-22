import { createSlice } from "@reduxjs/toolkit";
import {getFilesById} from "./FIleSliceFunctions";


const initialState = {
  files: [],
  error: {},
  loading: false,
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
  extraReducers: {
    [getFilesById.pending]: (state) => {
      state.loading = true;
    },
    [getFilesById.fulfilled]: (state, action) => {
      state.loading = false
      state.files = action.payload
    },
    [getFilesById.rejected]: (state) => {
      state.loading = false
    },

  },
})

export const fileSlice = filesSlice.reducer;


