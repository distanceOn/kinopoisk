import { useEffect, useState } from 'react';
import { ListType } from '../../../utils/types';
import { useAppSelector } from '../../../app/reduxHooks';
import { useMovieService } from '../../../hooks/api/useMovieService';

export const useMovieDetails = () => {
  const {
    name,
    description,
    rating,
    poster,
    persons,
    isSeries,
    seasonsInfo,
    reviews,
  } = useAppSelector(state => state.movie);

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { isFetching } = useMovieService({ page: currentPage, limit });

  const totalRating = rating.imdb !== 0 ? rating.imdb / 2 : rating.kp / 2;

  const [selectedValue, setSelectedValue] = useState<ListType>('actors');

  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
    if (selectedValue === 'actors') {
      setTotalData(persons);
    }
    if (selectedValue === 'seasons') {
      setTotalData(seasonsInfo);
    }
    if (selectedValue === 'reviews') {
      setTotalData(reviews);
    }
  }, [selectedValue, persons, seasonsInfo, reviews]);

  useEffect(() => {
    console.log('DATA', totalData);
  }, [totalData]);

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
    isSeries,
  };
};
