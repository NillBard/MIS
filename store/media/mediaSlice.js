import { createSlice } from "@reduxjs/toolkit";
import { mediaApi } from "./mediaApi";

const mediaSlice = createSlice({
  name: "media",
  initialState: { media: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      mediaApi.endpoints.loginMedia.matchFulfilled,
      (state, { payload }) => {
        state.media = payload;
      }
    );
    builder.addMatcher(
      mediaApi.endpoints.registerMedia.matchFulfilled,
      (state, { payload }) => {
        state.media = payload;
      }
    );
    builder.addMatcher(
      mediaApi.endpoints.logoutMedia.matchFulfilled,
      (state, action) => {
        state.media = null;
      }
    );
    builder.addMatcher(
      mediaApi.endpoints.authenticateMedia.matchFulfilled,
      (state, { payload }) => {
        state.media = payload;
      }
    );
  },
});

export const mediaReduser = mediaSlice.reducer;
