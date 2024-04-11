import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../utils/types';

type moviesState = {
  limit: number;
  movies: Movie[];
  totalMovies: number;
  page: number;
  totalPages: number;
};

const initialState: moviesState = {
  limit: 10,
  movies: [],
  totalMovies: 0,
  page: 1,
  totalPages: 0,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload.docs;
      state.totalMovies = action.payload.total;
      state.page = action.payload.page;
      state.totalPages = action.payload.pages;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setPage, setMovies, setLimit } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
