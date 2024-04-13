import { useEffect } from 'react';
import { useGetMoviesQuery } from '../../app/api/moviesApi';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import {
  setLimit,
  setMovies,
  setPage,
  setSort,
} from '../../app/reducers/moviesSlice';
import { SortType } from '../../utils/types';

export const useMoviesService = () => {
  const dispatch = useAppDispatch();
  const { limit, movies, totalMovies, page, sortField, search } =
    useAppSelector(state => state.movies);

  const totalQuery = search
    ? { page, limit, search }
    : sortField
      ? { page, limit, sortField }
      : { page, limit };

  const { data, isFetching, isSuccess } = useGetMoviesQuery(totalQuery);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setMovies(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetching, sortField]);

  const handlePageChange = (newPage: number, newPageSize: number) => {
    dispatch(setPage(newPage));
    dispatch(setLimit(newPageSize));
  };

  const handleSortChange = (newSort: SortType) => {
    dispatch(setSort(newSort));
  };

  return {
    limit,
    movies,
    totalMovies,
    page,
    isFetching,
    handlePageChange,
    handleSortChange,
    sortField,
  };
};
