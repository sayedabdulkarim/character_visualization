import { apiSlice } from "../apiSlice";

const USERS_URL = "api/character";

export const homeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
      }),
    }),
    getCharacterById: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } =
  homeApiSlice;
