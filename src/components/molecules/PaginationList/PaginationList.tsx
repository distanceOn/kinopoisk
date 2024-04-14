import { Empty, List, Pagination } from 'antd';

import { PaginationItem } from '../../atoms/PaginationItem/PaginationItem';
import { PaginationListProps } from './types';

import './styles.scss';
import { gridObject } from './utils';

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
  const gridProps = grid ? gridObject : undefined;

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
