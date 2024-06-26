import { useEffect, useState } from 'react';
import { ListType } from '../../utils/types';
import { useAppSelector } from '../../app/reduxHooks';
import { usePagination } from '../../hooks/usePagination';

export const useMovieDetails = () => {
  const { currentPage, setCurrentPage, limit, handlePageChange } =
    usePagination();

  const {
    name,
    alternativeName,
    description,
    rating,
    poster,
    persons,
    isSeries,
    seasonsInfo,
    reviews,
    posters,
    similarMovies,
  } = useAppSelector(state => state.movie);

  const totalName = name ? name : alternativeName;
  const totalRating = rating.imdb !== 0 ? rating.imdb / 2 : rating.kp / 2;

  const [selectedValue, setSelectedValue] = useState<ListType>('actors');
  const [totalData, setTotalData] = useState([]);

  const handleChangeDetails = (value: ListType) => {
    setSelectedValue(value);
  };
  const handleClick = (id: number) => {
    console.log('hello', id);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue, persons, seasonsInfo, reviews]);

  return {
    totalName,
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
    posters,
    similarMovies,
  };
};
