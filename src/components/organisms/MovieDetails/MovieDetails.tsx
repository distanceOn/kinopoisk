import { Spin } from 'antd';
import { ImgCarousel } from '../../molecules/ImgCarousel/ImgCarousel';
import { MovieCard } from '../../molecules/MovieCard/MovieCard';
import { PaginationList } from '../../molecules/PaginationList/PaginationList';
import { RadioBtns } from '../../molecules/RadioBtns/RadioBtns';
import { useMovieDetails } from './useMovieDetails';
import { Btn } from '../../atoms/Btn/Btn';
import { useNav } from '../../../hooks/useNav';

export const MovieDetails = () => {
  const {
    isFetching,
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
  } = useMovieDetails();

  const { goToMovies } = useNav();

  console.log(totalName);

  return isFetching ? (
    <Spin />
  ) : (
    <div>
      <Btn text='На главную' handleClick={goToMovies} />
      <MovieCard
        isFetching={isFetching}
        name={totalName}
        description={description}
        totalRating={totalRating}
        poster={poster}
      />
      <ImgCarousel type='poster' data={posters} />
      <ImgCarousel type='similar' data={similarMovies} />
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
    </div>
  );
};
