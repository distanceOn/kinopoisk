import { List } from 'antd';
import { ListType, Movie, Person, Review, Season } from '../../../utils/types';

type PaginationItemProps<T> = {
  type: ListType;
  renderItem: T;
  onClick: (id: number) => void;
};

export const PaginationItem = <T,>({
  type,
  renderItem,
  onClick,
}: PaginationItemProps<T>) => {
  if (type === 'movies') {
    const { id, name, alternativeName, year, countries, ageRating } =
      renderItem as Movie;

    return (
      <List.Item onClick={() => onClick(id)}>
        имя {name ? name : alternativeName} <br />
        год {year} <br />
        страны {countries.map(country => country.name).join(', ')} <br />
        возрастной рейтинг {ageRating ? ageRating : 'не указан'}
      </List.Item>
    );
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
