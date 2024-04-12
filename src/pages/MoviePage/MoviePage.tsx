import { useParams } from 'react-router-dom';
import S from './MoviePage.module.scss';

export const MoviePage = () => {
  const { id } = useParams();
  return (
    <div className={S.page}>
      <p>{id}</p>
    </div>
  );
};
