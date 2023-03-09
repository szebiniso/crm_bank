import {createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../../shared/utils/axiosConfig'

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async function(_,{ rejectWithValue}){
    try {
      const res = await API.get('assignee/');
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
      const res = await API.get(`assignee/${id}`);
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
      const res = await API.post('assignee/', values);
      await closeModal()
      dispatch(getUsers())
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({userId, values, closeModal} ,{ rejectWithValue, dispatch }) => {
    try {
      const res = await API.put(`assignee/${userId}/`, values);
      await closeModal()
      dispatch(getUsers())
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",

  async ({userId, setShowModal} ,{ rejectWithValue , dispatch}) => {
    try {
      const res = await API.delete(`assignee/${userId}`);
      console.log("res", res)
      await setShowModal()
      dispatch(getUsers())
      if (!res) {
        throw new Error("ERROR");
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);