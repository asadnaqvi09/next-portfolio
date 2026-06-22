import { baseApi } from "@/store/api/baseApi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitContact: builder.mutation({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const { useSubmitContactMutation } = contactApi;
