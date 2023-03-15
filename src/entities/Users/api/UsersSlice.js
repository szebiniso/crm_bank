import { createSlice } from "@reduxjs/toolkit";
import {getUserById, getUsers} from "./UsersSliceFunctions";
import {RegisterApi} from "../../Forms/api/registerApi";


const initialState = {
  users: [],
  userById:{},
  error:{}
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false
      state.users = action.payload
    },
    [getUsers.rejected]: (state) => {
      state.loading = false
    },
    [getUserById.pending]: (state) => {
      state.loading = true;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.loading = false
      state.userById = action.payload
    },
    [getUserById.rejected]: (state) => {
      state.loading = false
    },
  },
})

export const userSlice = usersSlice.reducer;


