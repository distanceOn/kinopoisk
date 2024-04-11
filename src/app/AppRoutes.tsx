import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
};

export default AppRoutes;
