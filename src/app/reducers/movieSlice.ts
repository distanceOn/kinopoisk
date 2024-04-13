import { createSlice } from '@reduxjs/toolkit';

type movieState = {
  name: string;
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
};

const initialState: movieState = {
  name: '',
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
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, { payload }) => {
      state.name = payload.name;
      state.description = payload.description;
      state.rating = payload.rating;
      state.persons = payload.persons;
      state.isSeries = payload.isSeries;
      state.seasonsInfo = payload.seasonsInfo;
      state.poster = payload.poster;
    },
    setReviews: (state, { payload }) => {
      state.reviews = payload;
    },
    resetMovie: () => initialState,
  },
});

export const { setMovie, setReviews, resetMovie } = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
