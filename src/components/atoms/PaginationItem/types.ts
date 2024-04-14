import { ListType } from '../../../utils/types';

export type PaginationItemProps<T> = {
  type: ListType;
  renderItem: T;
  onClick: (id: number) => void;
};

export type ItemProps<T> = {
  renderItem: T;
  onClick: (id: number) => void;
};
