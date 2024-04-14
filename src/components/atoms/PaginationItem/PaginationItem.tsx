import { PaginationItemProps } from './types';
import { MovieItem } from './components/MovieItem';
import { ActorItem } from './components/ActorItem';
import { SeasonItem } from './components/SeasonItem';
import { ReviewItem } from './components/ReviewItem';

export const PaginationItem = <T,>({
  type,
  renderItem,
  onClick,
}: PaginationItemProps<T>) => {
  if (type === 'movies') {
    return <MovieItem renderItem={renderItem} onClick={onClick} />;
  }

  if (type === 'actors') {
    return <ActorItem renderItem={renderItem} onClick={onClick} />;
  }

  if (type === 'seasons') {
    return <SeasonItem renderItem={renderItem} onClick={onClick} />;
  }

  if (type === 'reviews') {
    return <ReviewItem renderItem={renderItem} onClick={onClick} />;
  }

  return null;
};
