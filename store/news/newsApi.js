import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE__URL } from "../../utils/constants";

export const newsApi = createApi({
  reducerPath: "api/news",
  baseQuery: fetchBaseQuery({ baseUrl: BASE__URL, credentials: "include" }),
  tagTypes: ["News", "MediaNews"],
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (date) =>
        `/feed?limit=100&offset=0${date ? `&since=${date}` : ""}`,
      providesTags: (result) => ["News"],
    }),
    getFavourite: builder.query({
      query: () => `/favorites?limit=100&offset=0`,
      providesTags: (result) => ["News"],
    }),
    toggleFavourites: builder.mutation({
      query: (newsId) => ({
        url: `news/${newsId}/toggle-favorite`,
        method: "POST",
      }),
      invalidatesTags: ["News"],
    }),
    getMediaNews: builder.query({
      query: (mediaId) => `/media/${mediaId}/news?limit=100&offset=0`,
      providesTags: (result) => ["News"],
    }),
    updateImage: builder.mutation({
      query: ({ formData, newsId }) => ({
        url: `/news/${newsId}/image`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["News"],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetFavouriteQuery,
  useToggleFavouritesMutation,
  useGetMediaNewsQuery,
  useUpdateImageMutation,
} = newsApi;
