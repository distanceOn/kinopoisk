import { Empty, List, Pagination } from 'antd';

import { PaginationItem } from '../../atoms/PaginationItem/PaginationItem';
import { PaginationListProps } from './types';

import './styles.scss';

export const PaginationList = <T,>({
  type,
  data,
  page,
  limit,
  totalData,
  isFetching,
  handlePageChange,
  onClick,
  grid,
}: PaginationListProps<T>) => {
  const gridProps = grid
    ? {
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }
    : undefined;
  return (
    <div>
      {!isFetching && data.length === 0 ? (
        <Empty description='Нет данных' />
      ) : (
        <>
          <List
            grid={gridProps}
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
            responsive={true}
          />
        </>
      )}
    </div>
  );
};
