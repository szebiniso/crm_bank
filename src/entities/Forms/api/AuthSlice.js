import { createSlice } from "@reduxjs/toolkit";
import {RegisterApi} from "../../Forms/api/registerApi";
import {AuthApi} from "./authApi";


const initialState = {
  registerLoading: false,
  registerSuccess: false,
  registerError: false,

  authLoading: false,
  authSuccess: false,
  authError: false
};

const authsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    closeAuthErrorAlert: state => {
      state.authError = false
    }
  },
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
      state.registerError = true
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
      state.authError = true
    },
  },
})


export const { closeAuthErrorAlert } = authsSlice.actions;

export const authSlice = authsSlice.reducer;


