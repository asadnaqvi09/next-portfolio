import { baseApi } from "@/store/api/baseApi";

export const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    trackVisit: builder.mutation({
      query: (body) => ({
        url: "/analytics/track",
        method: "POST",
        body,
      }),
    }),
    getSummary: builder.query({
      query: () => "/analytics/summary",
      providesTags: ["Analytics"],
    }),
    getDaily: builder.query({
      query: () => "/analytics/daily",
      providesTags: ["Analytics"],
    }),
  }),
});

export const {
  useTrackVisitMutation,
  useGetSummaryQuery,
  useGetDailyQuery,
} = analyticsApi;
