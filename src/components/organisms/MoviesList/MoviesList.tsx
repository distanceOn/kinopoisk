import { useMoviesService } from '../../../hooks/api/useMovies';
import { MoviesFilter } from '../../molecules/MoviesFilter/MoviesFilter';
import { Search } from '../../molecules/Search/Search';
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
  } = useMoviesService();

  const { goToMovie } = useNav();

  return (
    <div>
      <Search />
      <MoviesFilter handleSortChange={handleSortChange} />
      <PaginationList
        type='movies'
        data={movies}
        isFetching={isFetching}
        handlePageChange={handlePageChange}
        page={page}
        limit={limit}
        totalData={totalMovies}
        onClick={goToMovie}
      />
    </div>
  );
};
