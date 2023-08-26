import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

const reducer = {
  [articleApi.reducerPath]: articleApi.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
