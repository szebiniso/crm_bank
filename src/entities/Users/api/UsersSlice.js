import { createSlice } from "@reduxjs/toolkit";
import {getManagers, getUserById, getUsers} from "./UsersSliceFunctions";


const initialState = {
  users: [],
  userById:{},
  managers: [],
  error:{},
  loading: false
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

    [getManagers.pending]: (state) => {
      state.loading = true;
    },
    [getManagers.fulfilled]: (state, action) => {
      state.loading = false
      state.managers = action.payload
    },
    [getManagers.rejected]: (state) => {
      state.loading = false
    },
  },
})

export const userSlice = usersSlice.reducer;


