import { useMoviesService } from '../../../hooks/api/useMovies';
import { MoviesFilter } from '../../molecules/MoviesFilter/MoviesFilter';
import { PaginationList } from '../../molecules/PaginationList/PaginationList';
import { useNav } from '../../../hooks/useNav';

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

  return (
    <div>
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
