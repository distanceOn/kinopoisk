import { List, Pagination } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks';
import { useGetMoviesQuery } from '../../../app/api/moviesApi';
import {
  setLimit,
  setMovies,
  setPage,
} from '../../../app/reducers/moviesSlice';

export const ListTemplate = () => {
  const dispatch = useAppDispatch();
  const { limit, movies, totalMovies, page } = useAppSelector(
    state => state.movies
  );

  const { data, isFetching, isSuccess } = useGetMoviesQuery({
    page,
    limit,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setMovies(data));
      console.log(data.docs);
    }
  }, [data, isFetching]);

  const handlePageChange = (newPage: number, newPageSize: number) => {
    dispatch(setPage(newPage));
    dispatch(setLimit(newPageSize));
  };

  return (
    <div>
      <List
        loading={isFetching}
        dataSource={movies}
        renderItem={movie => <List.Item>{movie.name}</List.Item>}
      />
      <Pagination
        current={page}
        onChange={handlePageChange}
        total={totalMovies}
        pageSize={limit}
      />
    </div>
  );
};
