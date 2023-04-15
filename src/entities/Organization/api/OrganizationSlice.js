import {createSlice} from "@reduxjs/toolkit";
import {createOrganization, editOrganization, getOrganizations} from "./OrganizationApi";

const initialState = {
  loading: false,
  error: false,
  createError: false,
  organizations: [],
  count: null
};

const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {},
  extraReducers: {
    [getOrganizations.pending]: (state) => {
      state.loading = true;
    },
    [getOrganizations.fulfilled]: (state, action) => {
      state.loading = false
      state.organizations = action.payload.results
      state.count = action.payload.count
    },
    [getOrganizations.rejected]: (state) => {
      state.loading = false
      state.error = true
    },

    [editOrganization.pending]: (state) => {
      state.loading = true;
    },
    [editOrganization.fulfilled]: (state) => {
      state.loading = false
    },
    [editOrganization.rejected]: (state) => {
      state.loading = false
      state.error = true
    },

    [createOrganization.pending]: (state) => {
      state.loading = true;
    },
    [createOrganization.fulfilled]: (state) => {
      state.loading = false
    },
    [createOrganization.rejected]: (state) => {
      state.loading = false
      state.createError = true
    },

  },
})

export const organizationsSlice = organizationSlice.reducer;