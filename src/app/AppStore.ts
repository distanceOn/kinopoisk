import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import { moviesReducer } from './reducers/moviesSlice';

export const appStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    movies: moviesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
