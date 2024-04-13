import { createSlice } from '@reduxjs/toolkit';
import { Poster, SimilarMovie } from '../../utils/types';

type movieState = {
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

const initialState: movieState = {
  name: '',
  alternativeName: '',
  description: '',
  rating: {
    imdb: 0,
    kp: 0,
  },
  persons: [],
  isSeries: false,
  seasonsInfo: [],
  poster: {
    url: '',
    previewUrl: '',
  },
  reviews: [],
  posters: [],
  similarMovies: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, { payload }) => {
      state.name = payload.name;
      state.alternativeName = payload.alternativeName;
      state.description = payload.description;
      state.rating = payload.rating;
      state.persons = payload.persons;
      state.isSeries = payload.isSeries;
      state.seasonsInfo = payload.seasonsInfo;
      state.poster = payload.poster;
      state.similarMovies = payload.similarMovies;
    },
    setReviews: (state, { payload }) => {
      state.reviews = payload;
    },
    setPosters: (state, { payload }) => {
      state.posters = payload;
    },
    resetMovie: () => initialState,
  },
});

export const { setMovie, setReviews, resetMovie, setPosters } =
  movieSlice.actions;

export const movieReducer = movieSlice.reducer;
