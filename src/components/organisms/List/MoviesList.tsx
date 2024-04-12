import { List, Pagination } from 'antd';
import { useMovies } from './useMovies';
import { MoviesFilter } from '../../molecules/MoviesFilter/MoviesFilter';
import { Search } from '../../molecules/Search/Search';

export const MoviesList = () => {
  const {
    movies,
    page,
    limit,
    totalMovies,
    isFetching,
    handlePageChange,
    handleSortChange,
  } = useMovies();

  return (
    <div>
      <Search />
      <MoviesFilter handleSortChange={handleSortChange} />
      <List
        loading={isFetching}
        dataSource={movies}
        renderItem={({ name, alternativeName, year, countries, ageRating }) => (
          <List.Item>
            имя {name ? name : alternativeName} <br />
            год {year} <br />
            страны {countries.map(country => country.name).join(', ')} <br />
            возрастной рейтинг {ageRating ? ageRating : 'не указан'}
          </List.Item>
        )}
      />
      <Pagination
        current={page}
        onChange={handlePageChange}
        total={totalMovies}
        pageSize={limit}
      />
    </div>
  );
};
