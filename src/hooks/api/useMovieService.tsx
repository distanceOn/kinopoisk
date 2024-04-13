import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/reduxHooks';
import { useGetMovieQuery } from '../../app/api/moviesApi';
import { useEffect } from 'react';
import { resetMovie, setMovie } from '../../app/reducers/movieSlice';

export const useMovieService = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { data, isFetching, isSuccess } = useGetMovieQuery(id);

  useEffect(() => {
    dispatch(resetMovie());
    if (isSuccess) {
      console.log(data);
      dispatch(setMovie(data));
    }
  }, [data, isSuccess]);

  return {
    isFetching,
    isSuccess,
  };
};
