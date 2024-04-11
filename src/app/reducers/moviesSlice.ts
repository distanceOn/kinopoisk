import { createSlice } from '@reduxjs/toolkit';
import { Movie, SortType } from '../../utils/types';

type moviesState = {
  limit: number;
  movies: Movie[];
  totalMovies: number;
  page: number;
  totalPages: number;
  sortField: SortType[];
};

const initialState: moviesState = {
  limit: 10,
  movies: [],
  totalMovies: 0,
  page: 1,
  totalPages: 0,
  sortField: [],
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
    setSort: (state, action) => {
      state.sortField = action.payload;
    },
  },
});

export const { setPage, setMovies, setLimit, setSort } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
