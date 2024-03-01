import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://rickandmortyapi.com/",
  // credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Characters"],
  endpoints: (builder) => ({}),
});
