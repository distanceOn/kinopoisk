import { Search } from '../../components/molecules/Search/Search';
import { MoviesList } from '../../components/organisms/MoviesList/MoviesList';
import S from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={S.page}>
      <Search />
      <MoviesList />
    </div>
  );
};
