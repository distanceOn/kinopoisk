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
  const { data: postersData, isSuccess: postersSuccess } = useGetPostersQuery({
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
    if (postersSuccess) {
      console.log(postersData);
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
