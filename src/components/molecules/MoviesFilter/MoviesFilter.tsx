import { Select } from 'antd';
import { SortType } from '../../../utils/types';

type MoviesFilterProps = {
  value: SortType | null;
  handleSortChange: (newSort: SortType) => void;
};

export const MoviesFilter = ({
  value,
  handleSortChange,
}: MoviesFilterProps) => {
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      value={value}
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
