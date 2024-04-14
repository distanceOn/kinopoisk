import { Image, Spin } from 'antd';
import { Btn } from '../../components/atoms/Btn/Btn';
import { useMovieDetails } from './useMovieDetails';
import { useNav } from '../../hooks/useNav';
import { MovieCard } from '../../components/molecules/MovieCard/MovieCard';
import { ImgCarousel } from '../../components/molecules/ImgCarousel/ImgCarousel';
import { RadioPagination } from '../../components/organisms/RadioPagination/RadioPagination';
import { DetailsTemplate } from '../../components/templates/DetailsTemplate/DetailsTemplate';
import { useMovieService } from '../../hooks/api/useMovieService';
import Placeholder from '../../app/assets/imgs/placeholder.png';

import S from './MoviePage.module.scss';
import { FullSpin } from '../../components/atoms/FullSpin/FullSpin';

export const MoviePage = () => {
  const {
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

  const { isFetching } = useMovieService();

  const { goToMovies } = useNav();

  const imageUrl = poster?.url || Placeholder;

  return (
    <div className={S.page}>
      <Btn text='На главную' handleClick={goToMovies} />
      {isFetching ? (
        <FullSpin />
      ) : (
        <>
          <DetailsTemplate
            image={<Image preview={false} loading='lazy' src={imageUrl} />}
            text={
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
            details={
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
            }
          />
        </>
      )}
    </div>
  );
};
