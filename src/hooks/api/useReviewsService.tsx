import { useGetReviewsQuery } from '../../app/api/moviesApi';
import { getReviewsType } from '../../utils/types';

export const useReviewsService = ({ page, limit, id }: getReviewsType) => {
  const { data, isSuccess, isFetching } = useGetReviewsQuery({
    page,
    limit,
    id,
  });

  return { data, isSuccess, isFetching };
};
