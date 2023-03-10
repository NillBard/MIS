import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_MEDIA_URL } from "../../utils/constants";

export const mediaApi = createApi({
  reducerPath: "api/media",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_MEDIA_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    loginMedia: builder.mutation({
      query: (loginForm) => ({
        url: "/login",
        method: "POST",
        body: loginForm,
      }),
    }),
    registerMedia: builder.mutation({
      query: (regForm) => ({
        url: "/register",
        method: "POST",
        body: regForm,
      }),
    }),
    logoutMedia: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    authenticateMedia: builder.mutation({
      query: () => ({
        url: "/authenticate",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMediaMutation,
  useLogoutMediaMutation,
  useRegisterMediaMutation,
  useAuthenticateMediaMutation,
} = mediaApi;
