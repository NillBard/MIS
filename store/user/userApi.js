import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_USER_URL } from "../../utils/constants";

export const userApi = createApi({
  reducerPath: "api/users",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_USER_URL, credentials: "include" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginForm) => ({
        url: "/login",
        method: "POST",
        body: loginForm,
      }),
    }),
    register: builder.mutation({
      query: (regForm) => ({
        url: "/register",
        method: "POST",
        body: regForm,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    authenticate: builder.mutation({
      query: () => ({
        url: "/authenticate",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  userApi;
