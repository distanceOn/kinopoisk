import { MovieCard } from '../../molecules/MovieCard/MovieCard';
import { PaginationList } from '../../molecules/PaginationList/PaginationList';
import { RadioBtns } from '../../molecules/RadioBtns/RadioBtns';
import { useMovieDetails } from './useMovieDetails';

export const MovieDetails = () => {
  const {
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
  } = useMovieDetails();

  return (
    <div>
      <MovieCard
        isFetching={isFetching}
        name={name}
        description={description}
        totalRating={totalRating}
        poster={poster}
      />
      <RadioBtns onChange={handleChangeDetails} value={selectedValue} />
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
    </div>
  );
};
