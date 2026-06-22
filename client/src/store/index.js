import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/store/api/baseApi";
import "@/store/api/contactApi";
import "@/store/api/analyticsApi";
import "@/store/api/authApi";
import uiReducer from "@/store/features/uiSlice";
import authReducer from "@/store/features/authSlice";
import { getStoredAuth } from "@/store/authStorage";

export function makeStore() {
  return configureStore({
    reducer: {
      ui: uiReducer,
      auth: authReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
    preloadedState: {
      auth: getStoredAuth(),
    },
  });
}
