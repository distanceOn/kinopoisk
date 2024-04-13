import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/reduxHooks';
import {
  useGetMovieQuery,
  useGetPostersQuery,
  useGetReviewsQuery,
} from '../../app/api/moviesApi';
import { useEffect } from 'react';
import {
  resetMovie,
  setMovie,
  setPosters,
  setReviews,
} from '../../app/reducers/movieSlice';

export const useMovieService = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { data, isFetching, isSuccess } = useGetMovieQuery(id);
  const { data: reviewsData, isSuccess: reviewsSuccess } =
    useGetReviewsQuery(id);
  const { data: postersData, isSuccess: postersSuccess } =
    useGetPostersQuery(id);

  useEffect(() => {
    dispatch(resetMovie());
    if (isSuccess) {
      dispatch(setMovie(data));
    }
    if (reviewsSuccess) {
      dispatch(setReviews(reviewsData.docs));
    }
    if (postersSuccess) {
      dispatch(setPosters(postersData.docs));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    data,
    isSuccess,
    reviewsData,
    reviewsSuccess,
    postersData,
    postersSuccess,
  ]);

  return {
    isFetching,
  };
};
