import { useMoviesService } from '../../../hooks/api/useMovies';
import { MoviesFilter } from '../../molecules/MoviesFilter/MoviesFilter';
import { PaginationList } from '../../molecules/PaginationList/PaginationList';
import { useNav } from '../../../hooks/useNav';

import S from './MoviesList.module.scss';
import { Spin } from 'antd';

export const MoviesList = () => {
  const {
    movies,
    page,
    limit,
    totalMovies,
    isFetching,
    handlePageChange,
    handleSortChange,
    sortField,
  } = useMoviesService();

  const { goToMovie } = useNav();

  return isFetching && movies.length === 0 ? (
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin size='large' />
    </div>
  ) : (
    <div className={S.container}>
      <MoviesFilter value={sortField} handleSortChange={handleSortChange} />
      <PaginationList
        type='movies'
        data={movies}
        isFetching={isFetching}
        handlePageChange={handlePageChange}
        page={page}
        limit={limit}
        totalData={totalMovies}
        onClick={goToMovie}
        grid={true}
      />
    </div>
  );
};
