import { createSlice } from "@reduxjs/toolkit";
import {RegisterApi} from "../../Forms/api/registerApi";
import {AuthApi} from "./authApi";


const initialState = {
  authLoading: false,
  authSuccess: false,
  authError: false,
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
    [AuthApi.pending]: (state) => {
      state.authLoading = true;
    },
    [AuthApi.fulfilled]: (state, action) => {
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


