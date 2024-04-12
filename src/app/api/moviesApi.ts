import { baseApi } from './baseApi';

type getMoviesType = {
  page: number;
  limit: number;
  sortField?: string[];
  search?: string;
};

export const moviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getMovies: build.query({
      query: ({ page, limit, sortField, search }: getMoviesType) => {
        if (search) {
          return `movie/search?page=${page}&limit=${limit}&query=${search}`;
        }
        let totalUrl = `movie?page=${page}&limit=${limit}`;
        if (sortField && sortField.length > 0) {
          const sortParams = sortField
            .map(field => `&sortField=${field}&sortType=-1`)
            .join('');
          totalUrl += sortParams;
        }
        return totalUrl;
      },
    }),

    getMovie: build.query({
      query: id => `movie/${id}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = moviesApi;
