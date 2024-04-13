import { SortType } from '../../../utils/types';

export type MoviesFilterProps = {
  value: SortType | null;
  handleSortChange: (newSort: SortType) => void;
};

export type Option = {
  label: string;
  value: string;
};
