import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE__URL } from "../../utils/constants";

export const publicationsApi = createApi({
  reducerPath: "api/publications",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE__URL,
    credentials: "include",
  }),
  tagTypes: ["Media", "Subscriptions"],
  endpoints: (builder) => ({
    getAllMedia: builder.query({
      query: () => ({
        url: "/media",
      }),
      providesTags: (result) => ["Media"],
    }),
    getAllSubscription: builder.query({
      query: (userId) => ({
        url: `/users/${userId}/subscriptions`,
      }),
      providesTags: (result) => ["Subscriptions"],
    }),
    toggleSubscribe: builder.mutation({
      query: (mediaId) => ({
        url: `/media/${mediaId}/toggle-subscription`,
        method: "POST",
      }),
      invalidatesTags: ["Media", "Subscriptions"],
    }),
  }),
});

export const {
  useGetAllMediaQuery,
  useGetAllSubscriptionQuery,
  useToggleSubscribeMutation,
} = publicationsApi;
