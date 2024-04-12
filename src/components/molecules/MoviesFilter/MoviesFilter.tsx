import { Select } from 'antd';
import { SortType } from '../../../utils/types';

type MoviesFilterProps = {
  handleSortChange: (newSort: SortType) => void;
};

export const MoviesFilter = ({ handleSortChange }: MoviesFilterProps) => {
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
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
  );
};
