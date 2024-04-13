import { SortType, getReviewsType } from '../../utils/types';
import { baseApi } from './baseApi';

type getMoviesType = {
  page: number;
  limit: number;
  sortField?: SortType;
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
        if (sortField) {
          totalUrl += `&sortField=${sortField}&sortType=-1`;
        }
        return totalUrl;
      },
    }),

    getMovie: build.query({
      query: id => `movie/${id}`,
    }),
    getReviews: build.query({
      query: ({ id }: getReviewsType) => `review?page=1&limit=10&id=${id}`,
    }),
    getPosters: build.query({
      query: ({ id }) => `image?page=1&limit=10&movieId=${id}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetReviewsQuery,
  useGetPostersQuery,
} = moviesApi;
