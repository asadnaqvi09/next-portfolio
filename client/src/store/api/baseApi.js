import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/lib/constants";
import { getStoredToken } from "@/store/authStorage";
import { logout } from "@/store/features/authSlice";
import { clearStoredAuth } from "@/store/authStorage";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    const token = state.auth.token || getStoredToken();
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithAuth = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const url = typeof args === "string" ? args : args.url;
    if (!url.includes("/auth/login")) {
      clearStoredAuth();
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Analytics", "Contact", "Auth"],
  endpoints: () => ({}),
});
