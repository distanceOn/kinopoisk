import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/reduxHooks';
import { useGetMovieQuery, useGetReviewsQuery } from '../../app/api/moviesApi';
import { useEffect } from 'react';
import {
  resetMovie,
  setMovie,
  setReviews,
} from '../../app/reducers/movieSlice';

export const useMovieService = ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { data, isFetching, isSuccess } = useGetMovieQuery(id);
  const { data: reviewsData, isSuccess: reviewsSuccess } = useGetReviewsQuery({
    page,
    limit,
    id: Number(id),
  });

  useEffect(() => {
    dispatch(resetMovie());
    if (isSuccess) {
      console.log(data);
      dispatch(setMovie(data));
    }
    if (reviewsSuccess) {
      console.log(reviewsData);
      dispatch(setReviews(reviewsData.docs));
    }
  }, [data, isSuccess]);

  return {
    isFetching,
  };
};
