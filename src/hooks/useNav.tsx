import { useNavigate } from 'react-router-dom';

export const useNav = () => {
  const navigate = useNavigate();
  const goToMovie = (id: number) => {
    navigate(`/${id}`);
  };

  const goToMovies = () => {
    navigate('/');
  };

  return { goToMovies, goToMovie };
};
