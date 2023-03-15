import { createSlice } from "@reduxjs/toolkit";
import {RegisterApi} from "../../Forms/api/registerApi";
import {AuthApi} from "./authApi";


const initialState = {
  registerLoading: false,
  registerSuccess: false,
  registerError:{},

  authLoading: false,
  authSuccess: false,
  authError:{}
};

const authsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [RegisterApi.pending]: (state) => {
      state.registerLoading = true;
    },
    [RegisterApi.fulfilled]: (state) => {
      state.registerLoading = false
      state.registerSuccess = true
    },
    [RegisterApi.rejected]: (state, action) => {
      state.registerLoading = false
      state.registerSuccess = false
      state.registerError = action.payload
    },
    [AuthApi.pending]: (state) => {
      state.authLoading = true;
    },
    [AuthApi.fulfilled]: (state) => {
      state.authLoading = false
      state.authSuccess = true
    },
    [AuthApi.rejected]: (state, action) => {
      state.authLoading = false
      state.authSuccess = false
      state.authError = action.payload
    },
  },
})

export const authSlice = authsSlice.reducer;


