import { List } from 'antd';
import { ListType, Movie, Person } from '../../../utils/types';

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
    const { description, name, photo } = renderItem as Person;

    return (
      <List.Item>
        {/* <img src={photo} alt={name} /> */}
        <br />
        {name}
        <br />
        {description}
      </List.Item>
    );
  }

  return null;
};
