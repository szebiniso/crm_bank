import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from "../entities/Users/api/UsersSlice";
import {authSlice} from "../entities/Forms/api/AuthSlice";
import {organizationsSlice} from "../entities/Organization/api/OrganizationSlice";
import {projectSlice} from "../entities/Projects/api/ProjectsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    organization: organizationsSlice,
    projects: projectSlice,
  },
});
