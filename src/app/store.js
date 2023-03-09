import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from "../entities/Users/api/UsersSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
