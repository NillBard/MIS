import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      userApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      userApi.endpoints.logout.matchFulfilled,
      (state, action) => {
        state.user = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.authenticate.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export const userReduser = userSlice.reducer;
