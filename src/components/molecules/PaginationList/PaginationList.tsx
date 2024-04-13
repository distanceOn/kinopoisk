import { List, Pagination } from 'antd';

import { PaginationItem } from '../../atoms/PaginationItem/PaginationItem';
import { ListType } from '../../../utils/types';
import { useEffect } from 'react';

type PaginationListProps<T> = {
  type: ListType;
  data: T[];
  page: number;
  limit: number;
  totalData: number;
  isFetching: boolean;
  handlePageChange: (newPage: number, newPageSize: number) => void;
  onClick: (id: number) => void;
};

export const PaginationList = <T,>({
  type,
  data,
  page,
  limit,
  totalData,
  isFetching,
  handlePageChange,
  onClick,
}: PaginationListProps<T>) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <List
        loading={isFetching}
        dataSource={data}
        renderItem={(renderItem: T) => (
          <PaginationItem
            type={type}
            renderItem={renderItem}
            onClick={onClick}
          />
        )}
      />
      <Pagination
        current={page}
        onChange={handlePageChange}
        total={totalData}
        pageSize={limit}
      />
    </div>
  );
};
