import { Empty, List, Pagination } from 'antd';

import { PaginationItem } from '../../atoms/PaginationItem/PaginationItem';
import { PaginationListProps } from './types';

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
  return (
    <div>
      {!isFetching && data.length === 0 ? (
        <Empty description='Нет данных' />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
