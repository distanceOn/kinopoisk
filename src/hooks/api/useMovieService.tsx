import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { useGetMovieQuery } from '../../app/api/moviesApi';
import { useEffect } from 'react';
import { resetMovie, setMovie } from '../../app/reducers/movieSlice';

export const useMovieService = () => {
  const dispatch = useAppDispatch();
  const { name, description, rating, poster } = useAppSelector(
    state => state.movie
  );
  const { id } = useParams();

  const { data, isFetching, isSuccess } = useGetMovieQuery(id);

  useEffect(() => {
    dispatch(resetMovie());
    if (isSuccess) {
      console.log(data);
      dispatch(setMovie(data));
    }
  }, [data, isFetching]);

  const totalRating = rating.imdb !== 0 ? rating.imdb : rating.kp;

  return { isFetching, name, description, totalRating, poster };
};
