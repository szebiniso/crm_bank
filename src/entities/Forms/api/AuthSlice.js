import { createSlice } from "@reduxjs/toolkit";
import {RegisterApi} from "../../Forms/api/registerApi";
import {AuthApi} from "./authApi";


const initialState = {
  authLoading: false,
  authSuccess: false,
  authError: "",
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
      state.authError = action.payload
    },
  },
})


export const { closeAuthErrorAlert } = authsSlice.actions;

export const authSlice = authsSlice.reducer;


