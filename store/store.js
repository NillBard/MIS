import { configureStore } from "@reduxjs/toolkit";
import { mediaApi } from "./media/mediaApi";
import { mediaReduser } from "./media/mediaSlice";
import { publicationsApi } from "./media/publicationsApi";
import { newsApi } from "./news/newsApi";
import { todaysNewsApi } from "./news/todaysNewsApi";
import { userApi } from "./user/userApi";
import { userReduser } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReduser,
    [newsApi.reducerPath]: newsApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    media: mediaReduser,
    [publicationsApi.reducerPath]: publicationsApi.reducer,
    [todaysNewsApi.reducerPath]: todaysNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      newsApi.middleware,
      mediaApi.middleware,
      publicationsApi.middleware,
      todaysNewsApi.middleware
    ),
});
