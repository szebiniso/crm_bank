import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from "../entities/Users/api/UsersSlice";
import {authSlice} from "../entities/Forms/api/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
  },
});
