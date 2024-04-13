import { Option } from './types';

export const filterOption = (input: string, option?: Option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

export const options = [
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
];
