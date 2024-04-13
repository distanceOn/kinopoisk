import { Select } from 'antd';
import { MoviesFilterProps } from './types';
import { filterOption, options } from './utils';

export const MoviesFilter = ({
  value,
  handleSortChange,
}: MoviesFilterProps) => {
  return (
    <Select
      value={value}
      placeholder='Фильтровать по'
      optionFilterProp='children'
      onChange={handleSortChange}
      filterOption={filterOption}
      options={options}
    />
  );
};
