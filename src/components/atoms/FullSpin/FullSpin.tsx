import { Spin } from 'antd';

import S from './FullSpin.module.scss';

export const FullSpin = () => {
  return (
    <div className={S.spin}>
      <Spin size='large' />
    </div>
  );
};
