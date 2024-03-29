import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from "../entities/Users/api/UsersSlice";
import {authSlice} from "../entities/Forms/api/AuthSlice";
import {organizationsSlice} from "../entities/Organization/api/OrganizationSlice";
import {projectSlice} from "../entities/Projects/api/ProjectsSlice";
import {iterationsSlice} from "../entities/Iterations/api/IterationSlice";
import {fileSlice} from "../entities/Projects/api/FilesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    organization: organizationsSlice,
    projects: projectSlice,
    iterations: iterationsSlice,
    files: fileSlice,
  },
});
