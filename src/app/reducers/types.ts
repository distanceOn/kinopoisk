import { Movie, Poster, SimilarMovie, SortType } from '../../utils/types';

export type movieState = {
  name: string;
  alternativeName: string;
  description: string;
  rating: {
    imdb: number;
    kp: number;
  };
  persons: [];
  isSeries: boolean;
  seasonsInfo: [];
  poster: {
    url: string;
    previewUrl: string;
  };
  reviews: [];
  posters: Poster[];
  similarMovies: SimilarMovie[];
};

export type moviesState = {
  limit: number;
  movies: Movie[];
  totalMovies: number;
  page: number;
  totalPages: number;
  sortField: SortType | null;
  search: string;
};
