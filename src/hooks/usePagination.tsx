import { useState } from 'react';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handlePageChange = (newPage: number, newPageSize: number) => {
    setCurrentPage(newPage);
    setLimit(newPageSize);
  };

  return { currentPage, setCurrentPage, limit, handlePageChange };
};
