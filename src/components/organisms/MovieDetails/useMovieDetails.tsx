import { useState } from 'react';
import { ListType } from '../../../utils/types';
import { useMovieService } from '../../../hooks/api/useMovieService';

export const useMovieDetails = () => {
  const {
    isFetching,
    name,
    description,
    totalRating,
    poster,
    persons,
    seasonsInfo,
  } = useMovieService();
  const [selectedValue, setSelectedValue] = useState<ListType>('actors');
  const totalData = selectedValue === 'actors' ? persons : seasonsInfo;
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handlePageChange = (newPage: number, newPageSize: number) => {
    setCurrentPage(newPage);
    setLimit(newPageSize);
  };

  const handleChangeDetails = (value: ListType) => {
    setSelectedValue(value);
  };

  const handleClick = (id: number) => {
    console.log('dasdas', id);
  };

  return {
    isFetching,
    name,
    description,
    totalRating,
    poster,
    totalData,
    handleChangeDetails,
    selectedValue,
    currentPage,
    limit,
    handlePageChange,

    handleClick,
  };
};
