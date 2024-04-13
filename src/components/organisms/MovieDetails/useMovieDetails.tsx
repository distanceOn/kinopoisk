import { useEffect, useState } from 'react';
import { ListType } from '../../../utils/types';
import { useMovieService } from '../../../hooks/api/useMovieService';
import { useAppSelector } from '../../../app/reduxHooks';

export const useMovieDetails = () => {
  const { isFetching } = useMovieService();

  const { name, description, rating, poster, persons, isSeries, seasonsInfo } =
    useAppSelector(state => state.movie);

  const totalRating = rating.imdb !== 0 ? rating.imdb / 2 : rating.kp / 2;

  const [selectedValue, setSelectedValue] = useState<ListType>('actors');
  const [totalData, setTotalData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setCurrentPage(1);
    if (selectedValue === 'actors') {
      setTotalData(persons);
    }
    if (selectedValue === 'seasons') {
      setTotalData(seasonsInfo);
    }
  }, [selectedValue, persons, seasonsInfo]);

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
