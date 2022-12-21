import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE__URL } from "../../utils/constants";

export const todaysNewsApi = createApi({
  reducerPath: "api/todaysNews",
  baseQuery: fetchBaseQuery({ baseUrl: BASE__URL, credentials: "include" }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getTodayNews: builder.query({
      query: () => `/feed?limit=100&offset=0&since=${Date.now()}`,
    }),
  }),
});

export const { useGetTodayNewsQuery } = todaysNewsApi;
