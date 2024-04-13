import { Spin } from 'antd';
import { Btn } from '../../components/atoms/Btn/Btn';
import { useMovieDetails } from './useMovieDetails';
import { useNav } from '../../hooks/useNav';
import { MovieCard } from '../../components/molecules/MovieCard/MovieCard';
import { ImgCarousel } from '../../components/molecules/ImgCarousel/ImgCarousel';
import { RadioPagination } from '../../components/organisms/RadioPagination/RadioPagination';
import { DetailsTemplate } from '../../components/templates/DetailsTemplate/DetailsTemplate';

export const MoviePage = () => {
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
  return (
    <div>
      <Btn text='На главную' handleClick={goToMovies} />
      {isFetching ? (
        <Spin />
      ) : (
        <>
          <DetailsTemplate
            card={
              <MovieCard
                isFetching={isFetching}
                name={totalName}
                description={description}
                totalRating={totalRating}
                poster={poster}
              />
            }
            carousel1={<ImgCarousel type='poster' data={posters} />}
            carousel2={<ImgCarousel type='similar' data={similarMovies} />}
          />
          <RadioPagination
            isSeries={isSeries}
            handleChangeDetails={handleChangeDetails}
            selectedValue={selectedValue}
            totalData={totalData}
            currentPage={currentPage}
            limit={limit}
            handlePageChange={handlePageChange}
            isFetching={isFetching}
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  );
};
