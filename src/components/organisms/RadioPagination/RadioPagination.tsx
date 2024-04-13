import { PaginationList } from '../../molecules/PaginationList/PaginationList';
import { RadioBtns } from '../../molecules/RadioBtns/RadioBtns';
import { RadioPaginationProps } from './types';

export const RadioPagination = <T,>({
  isSeries,
  handleChangeDetails,
  selectedValue,
  totalData,
  currentPage,
  limit,
  handlePageChange,
  isFetching,
  handleClick,
}: RadioPaginationProps<T>) => {
  return (
    <>
      <RadioBtns
        isSeries={isSeries}
        onChange={handleChangeDetails}
        value={selectedValue}
      />
      <PaginationList
        type={selectedValue}
        data={totalData.slice((currentPage - 1) * limit, currentPage * limit)}
        page={currentPage}
        limit={limit}
        totalData={totalData.length}
        isFetching={isFetching}
        handlePageChange={handlePageChange}
        onClick={handleClick}
      />
    </>
  );
};
