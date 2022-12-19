import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./user/userApi";
import { userReduser } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
