import S from './MainPage.module.scss';
import { ListTemplate } from '../../components/templates/ListTemplate/ListTemplate';

export const MainPage = () => {
  return (
    <div className={S.page}>
      <ListTemplate />
    </div>
  );
};
