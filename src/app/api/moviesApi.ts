import { baseApi } from './baseApi';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getMovies: build.query({
      query: ({ page, limit }) => `movie?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
