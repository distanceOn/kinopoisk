import { baseApi } from './baseApi';

type getMoviesType = {
  page: number;
  limit: number;
  sortField?: string[];
};

export const moviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getMovies: build.query({
      query: ({ page, limit, sortField }: getMoviesType) => {
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
  }),
});

export const { useGetMoviesQuery } = moviesApi;
