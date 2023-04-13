import {createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../../shared/utils/axiosConfig'
import APIwithToken from "../../../shared/utils/axiosConfigWithToken";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async function(_,{ rejectWithValue}){
    try {
      const res = await API.get('project/');
      console.log(res)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data.results
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);


export const createProject = createAsyncThunk(
  "projects/createProject",
  async ({values, closeModal} ,{ rejectWithValue, dispatch }) => {
    try {
      const res = await APIwithToken.post('project/', values);
      console.log(res)
      await closeModal()
      dispatch(getProjects())
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

// export const editUser = createAsyncThunk(
//   "users/editUser",
//   async ({values, closeModal} ,{ rejectWithValue, dispatch }) => {
//     try {
//       const res = await API.put(`users-list/${values.id}/`, values);
//       await closeModal()
//       dispatch(getUsers())
//       return res.data
//     } catch (error) {
//       return rejectWithValue(error.message)
//     }
//   }
// );
//
// export const deleteUser = createAsyncThunk(
//   "users/deleteUser",
//
//   async ({id, handleCloseDeleteModal} ,{ rejectWithValue , dispatch}) => {
//     try {
//       const res = await API.delete(`users-list/${id}`);
//       console.log("res", res)
//       await handleCloseDeleteModal()
//       dispatch(getUsers())
//       if (!res) {
//         throw new Error("ERROR");
//       }
//     } catch (error) {
//       return rejectWithValue(error.message)
//     }
//   }
// );