import { ListType } from '../../../utils/types';

export type PaginationListProps<T> = {
  type: ListType;
  data: T[];
  page: number;
  limit: number;
  totalData: number;
  isFetching: boolean;
  handlePageChange: (newPage: number, newPageSize: number) => void;
  onClick: (id: number) => void;
};
