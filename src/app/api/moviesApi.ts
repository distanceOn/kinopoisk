import { getReviewsType } from '../../utils/types';
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
    getReviews: build.query({
      query: ({ page, limit, id }: getReviewsType) =>
        `review?page=${page}&limit=${limit}&id=${id}`,
    }),
    getPosters: build.query({
      query: ({ page, limit, id }) =>
        `image?page=${page}&limit=${limit}&movieId=${id}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetReviewsQuery,
  useGetPostersQuery,
} = moviesApi;
