import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = process.env.REACT_APP_TOKEN;

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.kinopoisk.dev/v1.4/`,
    prepareHeaders: headers => {
      if (token) {
        headers.set('X-API-KEY', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
