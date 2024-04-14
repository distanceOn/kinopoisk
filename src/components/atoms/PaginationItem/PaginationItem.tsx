import { List } from 'antd';
import { Person, Review, Season } from '../../../utils/types';
import { PaginationItemProps } from './types';
import { MovieItem } from './components/MovieItem';

export const PaginationItem = <T,>({
  type,
  renderItem,
  onClick,
}: PaginationItemProps<T>) => {
  if (type === 'movies') {
    return <MovieItem renderItem={renderItem} onClick={onClick} />;
  }

  if (type === 'actors') {
    const { description, name, photo, enName } = renderItem as Person;

    return (
      <List.Item>
        {/* <img src={photo} alt={name} /> */}
        <br />
        {name ? name : enName}
        <br />
        {description}
      </List.Item>
    );
  }

  if (type === 'seasons') {
    const { episodesCount, number } = renderItem as Season;

    return (
      <List.Item>
        Сезон: {number} <br />
        Количество серий: {episodesCount}
      </List.Item>
    );
  }

  if (type === 'reviews') {
    const { author, date, review, type } = renderItem as Review;

    return (
      <List.Item>
        {author} <br />
        {date} <br />
        {review} <br />
        {type}
      </List.Item>
    );
  }

  return null;
};
