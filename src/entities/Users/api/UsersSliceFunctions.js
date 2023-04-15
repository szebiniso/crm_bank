import {createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../../shared/utils/axiosConfig'
import APIwithToken from "../../../shared/utils/axiosConfigWithToken";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async function(_,{ rejectWithValue}){
    try {
      const res = await API.get('users-list/', { params: {limit: 10, offset: 0 }});
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data.results
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const getManagers = createAsyncThunk(
  "users/getManagers",
  async function({limit, offset},{ rejectWithValue}){
    try {
      const res = await API.get('users-list/', { params: {role: 'Менеджер', limit: limit, offset: offset }});
      console.log(res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async function(id,{ rejectWithValue}){
    try {
      const res = await API.get(`users-list/${id}`);
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async ({values, closeModal} ,{ rejectWithValue, dispatch }) => {
    try {
      const res = await API.post('register/', values);
      await closeModal()
      dispatch(getManagers({limit: 10, offset: 0}))
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({values, closeModal} ,{ rejectWithValue, dispatch }) => {
    try {
      const res = await API.put(`users-list/${values.id}/`, values);
      await closeModal()
      dispatch(getManagers({limit: 10, offset: 0}))
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",

  async ({id, handleCloseDeleteModal} ,{ rejectWithValue , dispatch}) => {
    try {
      const res = await API.delete(`users-list/${id}`);
      await handleCloseDeleteModal()
      dispatch(getManagers({limit: 10, offset: 0}))
      if (!res) {
        throw new Error("ERROR");
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);