import { createSlice } from "@reduxjs/toolkit";
import { mediaApi } from "./mediaApi";

const mediaSlice = createSlice({
  name: "media",
  initialState: { media: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      mediaApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      mediaApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      mediaApi.endpoints.logout.matchFulfilled,
      (state, action) => {
        state.user = null;
      }
    );
    builder.addMatcher(
      mediaApi.endpoints.authenticateMedia.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export const mediaReduser = mediaSlice.reducer;
