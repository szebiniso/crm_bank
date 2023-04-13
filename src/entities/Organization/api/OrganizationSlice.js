import {createSlice} from "@reduxjs/toolkit";
import {getOrganizations} from "./OrganizationApi";

const initialState = {
  loading: false,
  error: false,
  organizations: []
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
      state.organizations = action.payload
    },
    [getOrganizations.rejected]: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const organizationsSlice = organizationSlice.reducer;