import { createSlice } from '@reduxjs/toolkit';
import { movieState } from './types';

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
