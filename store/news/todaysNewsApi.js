import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE__URL } from "../../utils/constants";

const date = new Date();
const today = date.setHours(0, 0);

export const todaysNewsApi = createApi({
  reducerPath: "api/todaysNews",
  baseQuery: fetchBaseQuery({ baseUrl: BASE__URL, credentials: "include" }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getTodayNews: builder.query({
      query: () => `/feed?limit=100&offset=0&since=${today}`,
    }),
  }),
});

export const { useGetTodayNewsQuery } = todaysNewsApi;
