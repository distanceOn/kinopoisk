import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { MoviePage } from '../pages/MoviePage/MoviePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/:id' element={<MoviePage />} />
    </Routes>
  );
};

export default AppRoutes;
