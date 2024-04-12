import { List, Pagination } from 'antd';
import { useMovies } from './useMovies';
import { MoviesFilter } from '../../molecules/MoviesFilter/MoviesFilter';
import { Search } from '../../molecules/Search/Search';
import { useNav } from '../../../hooks/useNav';

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

  const { goToMovie } = useNav();

  return (
    <div>
      <Search />
      <MoviesFilter handleSortChange={handleSortChange} />
      <List
        loading={isFetching}
        dataSource={movies}
        renderItem={({
          id,
          name,
          alternativeName,
          year,
          countries,
          ageRating,
        }) => (
          <List.Item onClick={() => goToMovie(id)}>
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
