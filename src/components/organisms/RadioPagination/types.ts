import { ListType } from '../../../utils/types';

export type RadioPaginationProps<T> = {
  isSeries: boolean;
  handleChangeDetails: (value: ListType) => void;
  selectedValue: ListType;
  totalData: T[];
  currentPage: number;
  limit: number;
  isFetching: boolean;
  handlePageChange: (newPage: number, newPageSize: number) => void;
  handleClick: (id: number) => void;
};
