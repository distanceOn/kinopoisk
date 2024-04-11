import { List, Pagination, Select } from 'antd';
import { useMovies } from './useMovies';

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

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div>
      <Select
        mode='multiple'
        placeholder='Фильтровать по'
        optionFilterProp='children'
        onChange={handleSortChange}
        filterOption={filterOption}
        options={[
          {
            value: 'year',
            label: 'Год',
          },
          {
            value: 'countries.name',
            label: 'Страна',
          },
          {
            value: 'ageRating',
            label: 'Возрастной рейтинг',
          },
        ]}
      />
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
